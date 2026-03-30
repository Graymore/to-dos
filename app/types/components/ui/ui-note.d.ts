import type { Todo } from '~/types/shared/todo';

export interface UiNoteProps {
  url: string;
  title: string;
  value: string;
  todos: Todo[];
}