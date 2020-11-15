import React, {useContext} from "react";
import styled from "styled-components";
import ThemeContext from "../../contexts/ThemeContext";
import { themes } from "../../styles/ThemeColors";

const HR = styled.hr`
  display: block;

  width: 100%;
  height: 1px;
  
  border: 0;
  clear: both;
  
  background-color: ${props => props.theme.foreground}
`;

export default function Line() {
  const theme = useContext(ThemeContext)[0];

  return <HR theme={themes[theme]} />
}