import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoBox } from "./TodoBox";
import { TodoAdd } from "./TodoAdd";

export const TodoContainer = () => {
  return (
    <div>
      <TodoHeader />
      <TodoBox />
      <TodoAdd />
    </div>
  );
};
