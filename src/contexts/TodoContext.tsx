import { ReactNode, createContext, useMemo, useState } from "react";
import { Status } from "../enums";
import { TodoContextValues, TodoList, Status as TodoStatus } from "../types";

export const TodoContext = createContext({} as TodoContextValues);

export function TodoContextProvider({ children }: { children: ReactNode }) {
  const [todoList, setTodoList] = useState<TodoList>([]);

  function addTodoItem(message: string) {
    if (
      message &&
      !todoList.find((todoListItem) => todoListItem.message === message)
    )
      setTodoList([...todoList, { message: message, status: Status.TODO }]);
  }

  function deleteTodoItem(message: string) {
    setTodoList(
      todoList.filter((todoListItem) => todoListItem.message !== message)
    );
  }

  function updateTodoItem(message: string, status: TodoStatus) {
    setTodoList(
      todoList.map((todoListItem) => {
        if (todoListItem.message !== message) return todoListItem;

        return {
          message: todoListItem.message,
          status: status,
        };
      })
    );
  }

  const countOfTodoStatus = useMemo(() => {
    return todoList.filter((todoItem) => todoItem.status === Status.TODO)
      .length;
  }, [todoList]);

  const countOfDoneStatus = useMemo(() => {
    return todoList.filter((todoItem) => todoItem.status === Status.DONE)
      .length;
  }, [todoList]);

  return (
    <TodoContext.Provider
      value={{
        addTodoItem,
        deleteTodoItem,
        updateTodoItem,
        todoList,
        countOfTodoStatus,
        countOfDoneStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
