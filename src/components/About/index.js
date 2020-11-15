import React from "react";
import styled from "styled-components";
import Resume from "../Resume";
import Anchor from "../Anchor";


const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  width: 95%;
  
  margin-top: 4em;
  padding: 0.5em;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  width: 95%;

  margin: 0 0 4em 0;
  padding: 0.5em;
`;

export default function About() {

  return (
    <Container>
      <Anchor name={"about"} />
      <h2>About Me</h2>
      <Article>
        <Anchor name={"resume"} />
        <Resume />
      </Article>
    </Container>
  );
}
