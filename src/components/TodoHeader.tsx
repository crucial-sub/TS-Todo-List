import React from "react";
import styled from "styled-components";

export const TodoHeader = () => {
  return (
    <HeaderBox>
      <DateBox>
        <Day>FRIDAY,</Day>
        <Date>February 4th</Date>
      </DateBox>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  border-bottom: 1px solid black;
`;

const DateBox = styled.div`
  height: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Day = styled.div`
  font-size: 1.7rem;
  margin-right: 5%;
`;

const Date = styled.div``;
