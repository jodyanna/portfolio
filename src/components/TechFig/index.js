import React from "react";
import styled from "styled-components";

import jsIcon from "../../img/icons/javascript.svg";
import htmlIcon from "../../img/icons/html5.svg";
import cssIcon from "../../img/icons/css.svg";
import pythonIcon from "../../img/icons/python.svg";
import nodeIcon from "../../img/icons/nodejs.svg";
import mysqlIcon from "../../img/icons/mysql.svg";
import reactIcon from "../../img/icons/react.svg";
import scIcon from "../../img/icons/styled-components.png";
import gitIcon from "../../img/icons/git.png";
import npmIcon from "../../img/icons/npm.png";

const Container = styled.figure`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  margin: 0 1.5em 0.5em 0;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  
  margin: 0.5em 0.5em 0.5em 0;

  border-radius: 50%;
`;

const Caption = styled.figcaption`  
  margin: 0;
  padding: 0;
`;

export default function TechFig(props) {
  const icons = {
    "JavaScript": jsIcon,
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "Python": pythonIcon,
    "Express/Node.js": nodeIcon,
    "MySQL": mysqlIcon,
    "React": reactIcon,
    "styled-components": scIcon,
    "git": gitIcon,
    "npm": npmIcon
  }

  return (
    <Container>
      <Icon src={icons[props.tech]} alt={props.tech} />
      <Caption>{props.tech}</Caption>
    </Container>
  );
}