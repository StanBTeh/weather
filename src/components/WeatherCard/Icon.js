import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    height: 100px;
  `;

  return (
    <Icon className="icon" src="./img/cloudy-day-2.svg" alt="Weather Icon" />
  );
};

export default Icon;
