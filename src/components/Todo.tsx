import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";
import { MdOutlineDeleteForever } from "react-icons/md";

interface Props {
  todo: ITask;
  todoList: ITask[];
  setTodoList: (val: any) => void;
}

export const Todo = ({ todo, todoList, setTodoList }: Props) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newTodo = {
      id: todo["id"],
      taskName: todo["taskName"],
      isChecked: !todo["isChecked"],
    };
    const targetId = event.target.name;
    const findId = todoList.findIndex(
      (item) => item.id.toString() === targetId
    );
    todoList.splice(findId, 1, newTodo);
    setTodoList([...todoList]);
  };

  const handleDelete = () => {
    const newTodoList = todoList.filter((item) => item.id !== todo.id);
    setTodoList([...newTodoList]);
  };
  return (
    <TodoItem className={todo.isChecked ? "checked" : "noChecked"}>
      <TodoCheck
        id={todo.id.toString()}
        name={todo.id.toString()}
        type="checkbox"
        onChange={handleCheck}
      ></TodoCheck>
      <CheckBox htmlFor={todo.id.toString()}></CheckBox>
      <TodoTask htmlFor={todo.id.toString()} isChecked={todo.isChecked}>
        {todo.taskName}
      </TodoTask>
      <MdOutlineDeleteForever onClick={handleDelete} />
    </TodoItem>
  );
};

const TodoItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 5%;
  align-items: center;
  position: relative;

  & > label {
    cursor: pointer;
  }

  & > input:checked ~ label:nth-child(2)::after {
    content: "✔";
    font-size: 25px;
    color: #b585c7;
    position: absolute;
    top: -30%;
    left: 10%;
  }
  & > input:checked ~ label:nth-child(3) {
    text-decoration: line-through;
    opacity: 0.5;
  }

  & > svg {
    opacity: 0;
    position: absolute;
    color: #b585c7;
    font-size: 2rem;
    right: 1rem;
    cursor: pointer;
  }

  & > label:hover ~ svg,
  svg:hover {
    opacity: 1;
  }
`;

const TodoCheck = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  display: none;
`;

const TodoTask = styled.label<{ isChecked: boolean }>`
  font-size: 25px;
  width: 100%;
  color: #767676;
  /* text-decoration: ${({ isChecked }) => isChecked && "line-through"};
  opacity: ${({ isChecked }) => isChecked && "0.5"}; */
`;

const CheckBox = styled.label`
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 10px 0 0;
  position: relative;
`;
