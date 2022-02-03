import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";

interface Props {
  todoList: ITask[];
  task: string;
  setTodoList: (val: any) => void;
  setTask: (val: string) => void;
}

export const AddForm = ({ todoList, task, setTodoList, setTask }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let newId = 0;
    if (todoList.length > 0) newId = todoList[todoList.length - 1]["id"] + 1;
    const newTask = { id: newId, taskName: task, isChecked: false };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  return (
    <FormBox>
      <Form onSubmit={handleSubmit}>
        <AddInput
          onChange={handleChange}
          type="text"
          placeholder="Please write down what to do."
          value={task}
        ></AddInput>
      </Form>
    </FormBox>
  );
};

const FormBox = styled.div``;

const Form = styled.form``;

const AddInput = styled.input``;
