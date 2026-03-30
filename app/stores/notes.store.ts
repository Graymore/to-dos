import type { Note } from '~/types/shared/note';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([]);
  const checkedNotes = ref<string[]>([]);

  const getNoteValue = (index: number) => {
    return `note-${index + 1}`;
  }

  const createNote = (title: string) => {
    return notes.value.push({ title, todos: [] });
  };

  const replaceNote = (index: number, note: Note) => {
    notes.value[index] = note;
  }

  const removeNote = (index: number) => {
    notes.value.splice(index, 1);
  }

  const removeCheckedNotes = () => {
    notes.value = notes.value.filter(
      (_, index) => !checkedNotes.value.includes(getNoteValue(index))
    );

    toggleCheckedNotes();
  }

  const unCheckNotes = () => {
    checkedNotes.value = [];
  }

  const toggleCheckedNotes = () => {
    if (checkedNotes.value.length < 1) {
      return checkedNotes.value = notes.value.map((_, index) => getNoteValue(index));
    }

    checkedNotes.value = [];
  };

  return {
    notes,
    checkedNotes,
    createNote,
    replaceNote,
    removeNote,
    removeCheckedNotes,
    unCheckNotes,
    getNoteValue,
    toggleCheckedNotes
  }
}, {
  persist: {
    key: 'notes-store',
    pick: ['notes']
  }
});