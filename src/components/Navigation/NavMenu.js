import React, {useContext} from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import ThemeContext from "../../contexts/ThemeContext";
import { themes } from "../../styles/ThemeColors";

const Menu = styled.ul`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  background-color: ${props => props.theme.background};
  opacity: 90%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;

  width: 95%;

  font-size: 4em;
  list-style: none;
`;

const ListItemSub = styled.li`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;

  width: 95%;

  font-size: 2em;
`;

export default function NavMenu(props) {
  const theme = useContext(ThemeContext)[0];

  return (
    <Menu isVisible={props.isVisible} theme={themes[theme]}>
      <ListItemSub>
        <NavButton label={"X"} onClick={props.onClick} />
      </ListItemSub>
      <ListItem><a href={"#top"} onClick={props.onClick}>Top</a></ListItem>
      {props.hr}
      <ListItem><a href={"#about"} onClick={props.onClick}>About</a></ListItem>
      <ListItemSub><a href={"#resume"} onClick={props.onClick}>Resume</a></ListItemSub>
      {props.hr}
      <ListItem><a href={"#skills"} onClick={props.onClick}>Skills</a></ListItem>
      {props.hr}
      <ListItem><a href={"#projects"} onClick={props.onClick}>Projects</a></ListItem>
      <ListItemSub><a href={"#chatter-bot"} onClick={props.onClick}>Chatter-bot</a></ListItemSub>
      <ListItemSub><a href={"#spiral-designs"} onClick={props.onClick}>Spiral Designs</a></ListItemSub>
      <ListItemSub><a href={"#portfolio"} onClick={props.onClick}>My Portfolio</a></ListItemSub>
    </Menu>
  );
}