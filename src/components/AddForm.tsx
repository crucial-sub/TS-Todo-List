import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";

interface Props {
  todoList: ITask[];
  task: string;
  setTodoList: (val: any) => void;
  setTask: (val: string) => void;
  visible: boolean;
  setVisible: (val: boolean) => void;
  handleVisible: () => void;
}

export const AddForm = ({
  todoList,
  task,
  setTodoList,
  setTask,
  visible,
  setVisible,
  handleVisible,
}: Props) => {
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
    <FormBox visible={visible}>
      <Form onSubmit={handleSubmit}>
        <AddInput
          onChange={handleChange}
          type="text"
          placeholder="오늘의 Todo를 적어주세요 !"
          value={task}
        ></AddInput>
      </Form>
      <CloseBtn onClick={handleVisible}>Close</CloseBtn>
    </FormBox>
  );
};

const FormBox = styled.div<{ visible: boolean }>`
  display: flex;
  width: ${({ visible }) => (visible ? "100%" : "0")};
  height: 100%;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transition: all 0.3s;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 0 70%;
`;

const AddInput = styled.input`
  width: 100%;
  text-align: center;
`;

const CloseBtn = styled.button`
  width: 100%;
  flex: 1 0 30%;
`;
