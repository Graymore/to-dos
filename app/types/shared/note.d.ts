import type { Todo } from './todo';

export interface Note {
  title: string;
  todos: Todo[];
}