import React, { useContext } from 'react';
import styled from "styled-components";
import Navigation from "../Navigation";
import Line from "../Line";
import ThemeContext from "../../contexts/ThemeContext";
import { themes } from "../../styles/ThemeColors";

const Container = styled.header`
  position: sticky;
  top: 0;

  width: 95%;
  height: 70px;
  
  align-items: center;
  justify-content: center;

  margin: 0;
  
  background-color: ${props => props.theme.background};
`;

export default function Header(props) {
  const theme = useContext(ThemeContext)[0];

  return (
    <Container theme={themes[theme]}>
      <Navigation hr={props.hr}
                  isButtonVisible={props.isButtonVisible}
      />
      <Line />
    </Container>
  );
}