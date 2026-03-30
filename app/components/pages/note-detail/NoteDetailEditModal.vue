<script setup lang="ts">
import { TitleModal } from '~/components/shared/modals';

const noteDetailStore = useNoteDetailStore();
const { setNoteRawTitle } = noteDetailStore;
const { noteRaw } = storeToRefs(noteDetailStore);

const { closeModals } = useModalsStore();

const noteTitle = ref('');

const onModalConfirm = () => {
  setNoteRawTitle(noteTitle.value);
  closeModals();
}

const onModalOpened = () => noteTitle.value = noteRaw.value.title;
</script>

<template>
  <title-modal
    v-model="noteTitle"
    name="note-edit"
    :title="$t('edit')"
    @on-confirm="onModalConfirm"
    @on-modal-opened="onModalOpened"
  />
</template>