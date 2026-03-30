<script setup lang="ts">
import { UiNote } from '~/components/ui';

const notesStore = useNotesStore();

const { notes, checkedNotes } = storeToRefs(notesStore);
const { getNoteValue, unCheckNotes } = notesStore;

const noteUrl = (index: number) => `/notes/${index + 1}`;

onBeforeUnmount(() => {
  unCheckNotes();
});
</script>

<template>
  <div class="home-note-list">
    <ui-note
      v-for="(note, index) in notes"
      :key="index"
      v-model:checked="checkedNotes"
      :todos="note.todos"
      :title="note.title"
      :value="getNoteValue(index)"
      :url="noteUrl(index)"
    />
    
    <span
      v-if="!notes.length"
      class="home-note-list__nothing"
    >
      {{ $t('empty_notes_list') }}
    </span>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/font';
@use 'assets/vars/color';

.home-note-list {
  @include flex.column;
  gap: 20px;

  &__nothing {
    @include font.inherit-500;
    color: color.$dirty;
    text-align: center;
    padding: 30px 0;
  }
}
</style>