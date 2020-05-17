import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    height: 100px;
  `;

  return (
    <Icon
      className="icon"
      src={process.env.PUBLIC_URL + "/img/cloudy-day-1.svg"}
      alt="Weather Icon"
    />
  );
};

export default Icon;
