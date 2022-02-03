import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";
import { Todo } from "./Todo";

interface Props {
  todoList: ITask[];
  task: string;
  setTodoList: (val: any) => void;
  setTask: (val: string) => void;
  isCompleted: boolean;
}

export const TodoList = ({
  todoList,
  task,
  setTodoList,
  setTask,
  isCompleted,
}: Props) => {
  return (
    <TodoListBox>
      {todoList.map((todo, i) => {
        return (
          <Todo
            key={i}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </TodoListBox>
  );
};

const TodoListBox = styled.ul`
  overflow: auto;
`;
