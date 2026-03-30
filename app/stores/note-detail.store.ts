import type { Ref } from 'vue';
import type { Note } from '~/types/shared/note';

export const useNoteDetailStore = defineStore('note-detail', () => {
  const noteRaw = ref<Note>() as Ref<Note>;
  const noteSnapshot = ref<Note>() as Ref<Note>;
  const noteSnapshotToBack = ref<Note>();

  const canRevertEditing = computed(
    () => JSON.stringify(noteRaw.value) !== JSON.stringify(noteSnapshot.value)
  );
  const canRevertToBack = computed(
    () => !canRevertEditing.value && !!noteSnapshotToBack.value
  );

  const initNoteDetailt = (note: Note) => {
    setNote(note);
    noteSnapshotToBack.value = undefined;
  }

  const setNote = (note: Note) => {
    noteRaw.value = structuredClone(toRaw(note));
    noteSnapshot.value = structuredClone(toRaw(note));
  }

  const revertEditing = () => {
    noteSnapshotToBack.value = structuredClone(toRaw(noteRaw.value));
    setNote(noteSnapshot.value);
  }

  const revertToBack = () => {
    if (noteSnapshotToBack.value) {
      setNote(noteSnapshotToBack.value);
      noteSnapshotToBack.value = undefined;
    }
  }

  const setNoteRawTitle = (title: string) => {
    noteRaw.value.title = title;
  }

  const createTodo = (title: string) => {
    noteRaw.value.todos.push({ title });
  }

  const removeTodo = (index: number) => {
    noteRaw.value.todos.splice(index, 1);
  }

  const setTodoTitle = (title: string, todoIndex: number) => {
    const todo = noteRaw.value.todos[todoIndex];
    if (todo) todo.title = title;
  }

  const toggleTodoChecked = (todoIndex: number) => {
    const todo = noteRaw.value.todos[todoIndex];
    if (todo) todo.checked = !todo.checked;
  }

  return {
    noteRaw,
    noteSnapshot,
    canRevertEditing,
    canRevertToBack,
    setNote,
    initNoteDetailt,
    revertEditing,
    setNoteRawTitle,
    createTodo,
    removeTodo,
    setTodoTitle,
    toggleTodoChecked,
    revertToBack,
  }
});