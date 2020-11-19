import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../contexts/ThemeContext";
import { themes } from "../../styles/ThemeColors";


const Menu = styled.div`
  position: absolute;
  z-index: -1;
  top: 48px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0.5em;
  
  width: 200px;

  background-color: ${props => props.theme.background};
  
  opacity: ${props => props.isVisible ? '1' : '0'};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-30%)'};
  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;;
`;

const ListItem = styled.a`
  float: left;
  
  margin: 0.4em 0;

  font-size: 1em;

  list-style: none;
`;

export default function DropdownMenu(props) {
  const theme = useContext(ThemeContext)[0];

  return (
    <Menu isVisible={props.isMenuVisible} theme={themes[theme]} >
      <ListItem href={"#chatter-bot"} onClick={props.onClick}>Chatter-bot</ListItem>
      <ListItem href={"#spiral-designs"} onClick={props.onClick}>Spiral Designs</ListItem>
      <ListItem href={"#github-summary"} onClick={props.onClick}>GitHub Repo Summary</ListItem>
      <ListItem href={"#portfolio"} onClick={props.onClick}>My Portfolio</ListItem>
    </Menu>
  )
}