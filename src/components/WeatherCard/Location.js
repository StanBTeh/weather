import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.6rem;
    padding-bottom: 0 auto;
    margin: 0 auto;
  `;

  const Country = styled.h3`
    font-family: "Fira sans", sans-serif;
    font-size: 1.1rem;
    margin: 0 auto;
    padding-bottom: 15px;
  `;

  return (
    <Container>
      <City>{props.city}</City>
      <Country>{props.country}</Country>
    </Container>
  );
};

export default Location;
