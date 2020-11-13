import React from "react";
import styled from "styled-components";

const Span = styled.span`
  /* Offset sticky header
  https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors/28824157#28824157
  */
  content: "";
  display: block;
  height: 70px; /* fixed header height*/
  margin: -70px 0 0; /* negative fixed header height */
`;

export default function Anchor(props) {
  return <Span id={props.name} className={"anchor"} />
}