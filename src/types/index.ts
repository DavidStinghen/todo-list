export type Status = "todo" | "done";

export type Todo = {
  message: string;
  status: Status;
};

export type TodoList = Todo[];

export type TodoContextValues = {
  addTodoItem: (message: string) => void;
  deleteTodoItem: (message: string) => void;
  updateTodoItem: (message: string, status: Status) => void;
  todoList: TodoList;
  countOfTodoStatus: number;
  countOfDoneStatus: number;
};
