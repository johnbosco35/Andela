/** @format */

import React from "react";
import styled from "styled-components";
import Slick1 from "./Slick1";

const Box1 = () => {
  return (
    <div>
      <Container>
        <Text>We’re trusted by the best</Text>
        <Slick1 />
      </Container>
    </div>
  );
};

export default Box1;

const Slick = styled.div``;
const Text = styled.div`
  font-size: 35px;
  font-weight: 700;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Container = styled.div`
  width: 100%;
  height: 290px;
  background-color: #b0d6ce;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  /* margin-bottom: 10px; */
  flex-direction: column;
`;
