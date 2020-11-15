import styled, { css } from 'styled-components';
import { fadeIn, fadeInUp, fadeInDown } from "../Animations";

const fadeInRule = css`
  ${fadeIn} 500ms ease-in;
`;

const fadeInUpRule = css`
  ${fadeInUp} 500ms ease-in;
`;

const fadeInDownRule = css`
  ${fadeInDown} 500ms ease-in;
`;


export const GreetingText = styled.div`
  font-size: 5em;
  text-align: center;
  
  opacity: 0;

  animation: ${fadeInDownRule};
  animation-fill-mode: forwards;
  animation-delay: 0;
`;

export const NutshellText = styled.div`
  font-size: 1.3em;
  text-align: center;
  
  opacity: 0;
  
  animation: ${fadeInRule};
  animation-fill-mode: forwards;
  animation-delay: 500ms;
`;

export const TaglineText = styled.div`
  font-size: 1.3em;
  text-align: center;
  
  opacity: 0;
  
  animation: ${fadeInRule};
  animation-fill-mode: forwards;
  animation-delay: 1500ms;
`;

export const NameText = styled.h1`
  width: 100%;
  margin: 0.3em 0;
  
  font-size: 2.5em;
  text-align: center;
  
  opacity: 0;
  
  animation: ${fadeInUpRule};
  animation-fill-mode: forwards;
  animation-delay: 2s;
`;