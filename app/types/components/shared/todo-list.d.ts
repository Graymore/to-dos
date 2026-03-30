import type { Todo } from '~/types/shared/todo';

export interface TodoListProps {
  todos: Todo[];
  inactive?: boolean;
}