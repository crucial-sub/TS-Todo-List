import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";

interface Props {
  task: string;
  todo: ITask;
  todoList: ITask[];
  setTodoList: (val: any) => void;
  isCompleted: boolean;
}

export const Todo = ({
  task,
  todo,
  todoList,
  setTodoList,
  isCompleted,
}: Props) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].taskName === targetName) {
        todoList[i].isChecked = !todoList[i].isChecked;
        console.log(todoList);
        return;
      }
    }
  };

  return (
    <TodoItem className={todo.isChecked ? "ss" : ""}>
      <TodoCheck
        name={todo.taskName}
        type="checkbox"
        onChange={handleCheck}
      ></TodoCheck>
      <TodoTask>{todo.taskName}</TodoTask>
    </TodoItem>
  );
};

const TodoItem = styled.li`
  margin: 5%;
`;

const TodoCheck = styled.input`
  margin-right: 10px;
`;

const TodoTask = styled.span``;
