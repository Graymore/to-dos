<script setup lang="ts">
import { TitleModal } from '~/components/shared/modals';

const { createTodo } = useNoteDetailStore();

const { closeModals } = useModalsStore();

const todoTitle = ref('');

const onModalConfirm = () => {
  createTodo(todoTitle.value);
  closeModals();
}
</script>

<template>
  <title-modal
    v-model="todoTitle"
    name="todo-create"
    :title="$t('add_todo')"
    @on-confirm="onModalConfirm"
  />
</template>