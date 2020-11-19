import React from "react";
import styled from "styled-components";

const Container = styled.figure`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  width: 90px;
  height: 90px;

  margin: 0;
  padding: 0;

  text-align: center;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;

  margin: 0.5em;

  border-radius: 50%;
`;

const Caption = styled.figcaption`
  font-size: 0.8em;
  font-style: italic;
  
  margin: 0;
  padding: 0;
`;

export default function TechFig(props) {
  return (
    <Container>
      <Icon src={props.icons[props.tech]} alt={props.tech} />
      <Caption>{props.tech}</Caption>
    </Container>
  );
}