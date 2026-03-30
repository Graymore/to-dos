<script setup lang="ts">
import { ConfirmModal } from '~/components/shared/modals';
import { BaseButton } from '~/components/base';
import { UiEventPanel } from '~/components/ui';
import { HomeNewNoteModal } from '~/components/pages/home';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const modalsStore = useModalsStore();
const notesStore = useNotesStore();

const { closeModals, setActiveModal } = modalsStore;

const { checkedNotes } = storeToRefs(notesStore);
const { removeCheckedNotes } = notesStore;

const removeButtonText = computed(
  () => !checkedNotes.value.length ? t('delete') : `${t('delete_selected')} (${checkedNotes.value.length})`
);

const onConfirmRemoveNotesModal = () => {
  removeCheckedNotes();
  closeModals();
}

const newNote = () => {
  checkedNotes.value = [];
  setActiveModal('note-create');
}
</script>

<template>
  <ui-event-panel>
    <confirm-modal
      name="notes-remove-confirm"
      :label="$t('confirm_delete_notes')"
      :closable="false"
      @cancel="closeModals"
      @confirm="onConfirmRemoveNotesModal"
    />

    <home-new-note-modal />

    <base-button
      variant="secondary-red"
      :disabled="!checkedNotes.length"
      @click="modalsStore.setActiveModal('notes-remove-confirm')"
    >
      {{ removeButtonText }}
    </base-button>
    
    <base-button
      variant="primary"
      @click="newNote"
    >
      {{ $t('new_note') }}
    </base-button>
  </ui-event-panel>
</template>