import React from "react";
import styled from "styled-components";
import { DAYS, MONTHS } from "../constants";

export const TodoHeader = () => {
  const newDate: Date = new Date();
  const currentDay = newDate.getDay();
  const currentMonth = newDate.getMonth();
  let currentDate: any = newDate.getDate();
  if (currentDate === 1) {
    currentDate = currentDate + "st";
  } else if (currentDate === 2) {
    currentDate = currentDate + "nd";
  } else if (currentDate === 3) {
    currentDate = currentDate + "rd";
  } else {
    currentDate = currentDate + "th";
  }

  return (
    <HeaderBox>
      <TodayInfo>
        <DayBox>{DAYS[currentDay]} ,</DayBox>
        <DateBox>
          {MONTHS[currentMonth]} {currentDate}
        </DateBox>
      </TodayInfo>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  border-bottom: 1px solid #eb9845;
`;

const TodayInfo = styled.div`
  height: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #eb9845;
`;

const DayBox = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  margin-right: 5%;
`;

const DateBox = styled.div`
  margin-top: 1%;
  font-weight: 600;
  opacity: 0.8;
`;
