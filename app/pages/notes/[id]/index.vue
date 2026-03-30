<script setup lang="ts">
import { 
  NoteDetailEventPanel, 
  NoteDetailHeadPanel
} from '~/components/pages/note-detail';
import { TodoList } from '~/components/shared';

const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);

const noteDetail = useNoteDetailStore();
const { noteRaw } = storeToRefs(noteDetail);
const { initNoteDetailt } = noteDetail;

const route = useRoute();
const noteIndex = Number(route.params.id) - 1;

if (!notes.value[noteIndex]) {
  throw createError({ statusCode: 404, statusText: 'Note is not found!' });
}

initNoteDetailt(notes.value[noteIndex]);
</script>

<template>
  <div class="page">
    <note-detail-head-panel />

    <div class="page__content">
      <h1>{{ noteRaw.title }}</h1>

      <todo-list
        class="page__todos"
        :todos="noteRaw.todos"
      />
    </div>

    <note-detail-event-panel />
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/page';

@include page.content-center;
</style>