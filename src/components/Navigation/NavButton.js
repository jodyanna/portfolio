import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 0;
  padding: 0;

  border: none;
  background-color: transparent;

  color: #00e28d;
  font-weight: bold;
  font-size: 1.6em;
  
  @media screen and (min-width: 640px) {
    display: none;
}
`;

export default function NavButton(props) {
  return (
    <Button onClick={props.onClick}>
      [ <span>{props.label}</span> ]
    </Button>
  );
}