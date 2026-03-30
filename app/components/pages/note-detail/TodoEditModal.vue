<script setup lang="ts">
import { TitleModal } from '~/components/shared/modals';

const { todoIndex } = defineProps<{
  todoIndex: number;
}>();

const noteDetailStore = useNoteDetailStore();
const { noteRaw } = storeToRefs(noteDetailStore);
const { setTodoTitle } = noteDetailStore;

const { closeModals } = useModalsStore();

const todoTitle = ref('');

const onModalConfirm = () => {
  setTodoTitle(todoTitle.value, todoIndex);
  closeModals();
}

const onModalOpened = () => {
  const todo = noteRaw.value.todos[todoIndex];
  
  if (todo) {
    todoTitle.value = todo.title;
  }
}
</script>

<template>
  <title-modal
    v-model="todoTitle"
    name="todo-edit"
    :title="$t('edit_todo')"
    @on-confirm="onModalConfirm"
    @on-modal-opened="onModalOpened"
  />
</template>