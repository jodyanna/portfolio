import React from 'react';
import Navigation from "../Navigation";
import styled from "styled-components";

const Container = styled.header`
  position: sticky;
  top: 0;

  width: 95%;
  height: 70px;
  
  align-items: center;
  justify-content: center;

  margin: 0;

  background-color: inherit;
`;

export default function Header(props) {
  return (
    <Container>
      <Navigation hr={props.hr}
                  isButtonVisible={props.isButtonVisible}
      />
      {props.hr}
    </Container>
  );
}