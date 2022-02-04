import React, { useState } from "react";
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
  const completedCount = todoList.filter(
    (todo) => todo.isChecked === true
  ).length;

  const [visible, setVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setVisible((state) => !state);
  };
  return (
    <AddContainer>
      <AddBox visible={visible}>
        {todoList.length > 0 ? (
          todoList.length > completedCount ? (
            <TaskCount visible={visible}>
              Todo {todoList.length}개 중 {completedCount}개 완료
            </TaskCount>
          ) : (
            <TaskCount visible={visible}>오늘의 Todo 완료 !</TaskCount>
          )
        ) : (
          <TaskCount visible={visible} />
        )}
        <BtnLabel visible={visible} htmlFor="add-btn">
          ADD NEW +
        </BtnLabel>
        <AddBtn id="add-btn" onClick={handleVisible} />
      </AddBox>
      <AddForm
        visible={visible}
        setTodoList={setTodoList}
        setTask={setTask}
        task={task}
        todoList={todoList}
        setVisible={setVisible}
        handleVisible={handleVisible}
      />
    </AddContainer>
  );
};

const AddContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const AddBox = styled.div<{ visible: boolean }>`
  display: flex;
  width: ${({ visible }) => (visible ? "0" : "100%")};
  height: 100%;
  opacity: ${({ visible }) => (visible ? "0" : "1")};
  transition: all 1s;
  visibility: ${({ visible }) => (visible ? "hidden" : "visible")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskCount = styled.span<{ visible: boolean }>`
  color: #ff87ca;
  color: ${({ visible }) => visible && "#ffffff"};
  transition: ${({ visible }) => (visible ? "0s" : "0.4s")};
  transition-timing-function: step-end;
  font-weight: 700;
  font-size: 1.1rem;
  flex: 1 0 70%;
  text-align: center;
`;

const AddBtn = styled.button`
  display: none;
`;

const BtnLabel = styled.label<{ visible: boolean }>`
  cursor: pointer;
  flex: 1 0 30%;
  text-align: center;
  color: black;
  color: ${({ visible }) => visible && "#ffffff"};
  transition: ${({ visible }) => (visible ? "0s" : "0.4s")};
  transition-timing-function: step-end;
`;
