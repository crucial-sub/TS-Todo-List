import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";
import { AddForm } from "./AddForm";

interface Props {
  todoList: ITask[];
  task: string;
  setTodoList: (val: any) => void;
  setTask: (val: string) => void;
}

export const TodoAdd = ({ setTodoList, setTask, task, todoList }: Props) => {
  return (
    <>
      <AddBox>
        <TaskCount>0 Tasks</TaskCount>
        <BtnLabel htmlFor="add-btn">ADD NEW +</BtnLabel>
        <AddBtn id="add-btn" />
      </AddBox>
      <AddForm
        setTodoList={setTodoList}
        setTask={setTask}
        task={task}
        todoList={todoList}
      />
    </>
  );
};

const AddBox = styled.div`
  border-top: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
`;

const TaskCount = styled.span``;

const AddBtn = styled.button`
  display: none;
`;

const BtnLabel = styled.label``;
