import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  margin: 0 1em 1em 0;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  
  margin: 0.5em;

  border-radius: 50%;
`;

export default function Skill(props) {
  return (
    <Container>
      <Icon src={props.skill.icon} alt={props.skill.displayName} />
      <p>{props.skill.displayName}</p>
    </Container>
  );
}