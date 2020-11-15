import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownButton from "./DropdownButton";
import ThemeContext from "../../contexts/ThemeContext";
import { themes } from "../../styles/ThemeColors";


const Bar = styled.ul`
  display: flex;
  
  align-items: flex-end;
  justify-content: space-evenly;
  
  width: 100%;

  margin: 0;
  padding: 0;
  
  background-color: ${props => props.theme.background};
  
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const BarItem = styled.li`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 150px;

  font-size: 1.5em;
  text-align: center;

  margin: 0.5em 1em 0.2em 1em;

  list-style: none;
`;


export default function NavBar(props) {
  const [ isMenuVisible, setIsMenuVisible ] = useState(false);
  const handleClick = () => setIsMenuVisible(!isMenuVisible)

  const theme = useContext(ThemeContext)[0];

  useEffect(() => {
    if(!props.isButtonVisible) setIsMenuVisible(false);
  }, [props.isButtonVisible])

  return (
    <Bar theme={themes[theme]} >
      <BarItem><a href={"#top"}>Top</a></BarItem>
      <BarItem><a href={"#about"}>About</a></BarItem>
      <BarItem><a href={"#skills"}>Skills</a></BarItem>
      <BarItem>
        <a href={"#projects"}>Projects</a>
        <DropdownButton onClick={handleClick}
                        isVisible={props.isButtonVisible}
        />
        <DropdownMenu isMenuVisible={isMenuVisible}
                      menuOffset={160}
                      onClick={handleClick}
        />
      </BarItem>
    </Bar>
  );
}