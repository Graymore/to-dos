<script setup lang="ts">
import { BaseButton } from '~/components/base';
import { UiEventPanel } from '~/components/ui';
import { ConfirmModal } from '~/components/shared/modals';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const router = useRouter();

const { closeModals, setActiveModal } = useModalsStore();

const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);
const { replaceNote, removeNote } = notesStore;

const noteDetailStore = useNoteDetailStore();
const { noteRaw, canRevertEditing, canRevertToBack } = storeToRefs(noteDetailStore);
const { revertEditing, revertToBack } = noteDetailStore;

const noteIndex = Number(useRoute().params.id) - 1;

const canSave = computed(
  () => JSON.stringify(notes.value[noteIndex]) !== JSON.stringify(noteRaw.value)
);

const revertButtonText = computed(
  () => !canRevertToBack.value ? t('undo_changes') : t('redo_changes')
);

const revertButtonVisible = computed(
  () => canRevertEditing.value || canRevertToBack.value
);

const saveNote = () => {
  replaceNote(noteIndex, noteRaw.value);
  router.push('/');
}

const revertButtonClick = () => {
  if (!canRevertToBack.value) {
    setActiveModal('note-revert-editing-confirm');

    return;
  }

  revertToBack();
}

const confirmRevert = () => {
  revertEditing();
  closeModals();
}

const confirmRemoveNote = () => {
  removeNote(noteIndex);
  closeModals();
  router.push('/');
}
</script>

<template>
  <confirm-modal
    name="note-revert-editing-confirm"
    :label="$t('cancel_changes?')"
    :closable="false"
    @cancel="closeModals"
    @confirm="confirmRevert"
  />

  <confirm-modal
    name="note-remove-confirm"
    :label="$t('delete_note?')"
    :closable="false"
    @cancel="closeModals"
    @confirm="confirmRemoveNote"
  />

  <ui-event-panel class="note-detail-event-panel">
    <base-button
      variant="secondary-red"
      class="note-detail-event-panel__delete"
      @click="setActiveModal('note-remove-confirm')"
    >
      {{ $t('delete_note') }}
    </base-button>

    <base-button
      v-if="revertButtonVisible"
      variant="secondary"
      @click="revertButtonClick"
    >
      {{ revertButtonText }}
    </base-button>

    <base-button
      variant="primary"
      :disabled="!canSave"
      @click="saveNote"
    >
      {{ $t('save') }}
    </base-button>
  </ui-event-panel>
</template>

<style scoped lang="scss">
@use 'assets/mixins/device';

.note-detail-event-panel__delete {
  margin-right: auto;

  @include device.phone {
    margin-right: unset;
  }
}
</style>