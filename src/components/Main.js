import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <h1>Mainm</h1>
      <h1>Mainmn</h1>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;
export default Main;
