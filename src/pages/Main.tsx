import React from "react";
import { TodoContainer } from "../components/TodoContainer";
import styled from "styled-components";

export const Main = () => {
  return (
    <MainContainer>
      <TodoContainer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
