enum ModalsList {
  'notes-remove-confirm',
  'note-revert-editing-confirm',
  'note-create',
  'note-edit',
  'note-remove-confirm',
  'todo-remove-confirm',
  'todo-create',
  'todo-edit',
}

export type TModal = keyof typeof ModalsList;