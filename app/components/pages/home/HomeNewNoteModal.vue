<script setup lang="ts">
import { TitleModal } from '~/components/shared/modals';

const { closeModals } = useModalsStore();
const { createNote } = useNotesStore();
const router = useRouter();

const noteTitle = ref('');

const modalOnConfirm = () => {
  if (noteTitle.value.trim().length) {
    const noteIndex = createNote(noteTitle.value);
    router.push(`/notes/${noteIndex}`);
    closeModals();
  }
}
</script>

<template>
  <title-modal
    v-model="noteTitle"
    :title="$t('new_note')"
    name="note-create"
    @on-confirm="modalOnConfirm"
  />
</template>