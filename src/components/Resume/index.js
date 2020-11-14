import React from "react";
import styled from "styled-components";
import resume from "../../img/jpdanna-resume.pdf";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: baseline;
  justify-content: flex-start;

  width: 100%;
  
  margin: 1em 0;
`;

const Link = styled.a`
  margin: 0 1em 0 0;
  
  font-size: 1.2em;
`;

export default function Resume() {
  return (
    <Container>

      <h3>Resume: &nbsp;</h3>
      <Link href={resume} target="_blank" rel="noopener noreferrer">Download PDF</Link>
    </Container>
  );
}
