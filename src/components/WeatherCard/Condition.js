import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Temp = styled.h1`
    font-family: "Fira sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 200;
    padding: 0 auto;
    margin: 0;
    text-align: center;
  `;
  const Condition = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1rem;
    padding: 0 auto;
    margin: 0;
    text-align: center;
  `;
  return (
    <div>
      <Temp>28 °C</Temp>
      <Condition>Cloudy</Condition>
    </div>
  );
};

export default Condition;
