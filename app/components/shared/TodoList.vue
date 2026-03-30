<script setup lang="ts">
import { UiIcon } from '~/components/ui';
import { BaseCheckbox } from '~/components/base';
import { 
  TodoCreateModal,
  TodoEditModal,
} from '~/components/pages/note-detail';
import type { TodoListProps } from '~/types/components/shared/todo-list';

const { inactive, todos } = defineProps<TodoListProps>();

const { setActiveModal } = useModalsStore();
const { removeTodo, toggleTodoChecked } = useNoteDetailStore();

const selectedTodoIndex = ref(-1);

const emptyTextVisible = computed(() => inactive && !todos.length);

const todoValue = computed(() => (i:number) => `todo-${i}`);

const todoListClasses = computed(() => ({
  'todo-list': true,
  'todo-list--inactive': inactive
}));

const showTodoEditModal = (index: number) => {
  selectedTodoIndex.value = index;
  setActiveModal('todo-edit');
}
</script>

<template>
  <div :class="todoListClasses">
    <todo-create-modal />
    
    <todo-edit-modal 
      :todo-index="selectedTodoIndex"
    />
    
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="todo-list__item"
    >
      <base-checkbox
        variant="rounded"
        :value="todoValue(index)"
        :label="todo.title"
        :checked="todo.checked"
        @input="toggleTodoChecked(index)"
      />

      <span
        v-if="!inactive"
        class="todo-list__actions"
      >
        <ui-icon
          name="pen"
          @click="showTodoEditModal(index)"
        />

        <ui-icon
          name="delete"
          @click="removeTodo(index)"
        />
      </span>
    </div>

    <span
      v-if="!inactive"
      class="todo-list__add"
      @click="setActiveModal('todo-create')"
    >
      <ui-icon name="plus" />
      
      {{ $t('add_todo') }}
    </span>

    <span 
      v-if="emptyTextVisible"
      class="todo-list__label"
    >
      ({{ $t('empty') }})
    </span>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/mixins/flex';
@use 'assets/mixins/font';
@use 'assets/vars/color';

.todo-list {
  @include flex.column;
  margin-top: 20px;
  gap: 12px;

  &--inactive {
    margin-top: 12px;
    pointer-events: none;
    opacity: .5;
    gap: 4px;
  }

  &__item {
    @include flex.inline-between;
  }

  &__actions {
    @include flex.inline;
    gap: 10px;
  }

  &__actions svg {
    cursor: pointer;
    color: color.$primary;
    height: 21px;
    width: 21px;

    &:hover {
      color: color.$primary-active;
    }
  }

  &__label {
    @include font.inherit;
    color: black;
  }

  &__add {
    @include flex.inline;
    @include font.inherit-500;
    color: color.$primary;
    cursor: pointer;

    &:hover {
      color: color.$primary-active;
    }

    &:hover svg {
      border-color: color.$primary-active;
    }
  }

  &__add svg {
    border: 1px solid color.$primary;
    border-radius: 50%;
    margin-right: 10px;
    width: 21px;
    height: 21px;
  }
}
</style>