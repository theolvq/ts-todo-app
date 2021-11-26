export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface Project {
  id: number;
  name: string;
  deadline: Date;
  todos: Todo[];
}
