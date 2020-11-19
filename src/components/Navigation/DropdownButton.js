import React from "react";
import styled from "styled-components";
import dropdownArrow from "../../img/icons/dropdown-arrow.svg";


const Button = styled.div`
  display: block;
  position: relative;
  z-index: 2;
  top: 3px;
  

  margin-left: 1em;

  background-color: transparent;
  border: none;
  
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: opacity 200ms ease-in-out;
  
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  transform: rotate(90deg);
`;

export default function DropdownButton(props) {
  return (
    <Button onClick={props.onClick} isVisible={props.isVisible}>
      <Icon src={dropdownArrow} alt="dropdown-arrow.svg" />
    </Button>
  )
}