import React, { useState } from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import styled from "styled-components";
import { ITask } from "../Interfaces";

export const TodoContainer = () => {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  return (
    <TodoBox>
      <TodoHeader />
      <TodoList
        setTodoList={setTodoList}
        setTask={setTask}
        task={task}
        todoList={todoList}
        isCompleted={isCompleted}
      />
      <TodoAdd
        setTodoList={setTodoList}
        setTask={setTask}
        task={task}
        todoList={todoList}
      />
    </TodoBox>
  );
};

const TodoBox = styled.div`
  background-color: #ffffff;
  width: 33%;
  height: 70%;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 20px grey;

  & > div:nth-child(1) {
    flex: 1 0 15%;
  }
  & > ul:nth-child(2) {
    flex: 1 0 70%;
  }
  & > div:nth-child(3) {
    flex: 1 0 15%;
  }
`;
