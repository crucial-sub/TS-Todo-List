import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";
import { Todo } from "./Todo";

interface Props {
  todoList: ITask[];
  task: string;
  setTodoList: (val: any) => void;
  setTask: (val: string) => void;
}

export const TodoList = ({ todoList, task, setTodoList, setTask }: Props) => {
  return (
    <TodoListBox>
      {todoList.length === 0 && (
        <EmptyBox>오늘의 Todo를 추가해주세요!</EmptyBox>
      )}
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
  position: relative;
  border-bottom: 1px solid #eb9845;
`;

const EmptyBox = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
