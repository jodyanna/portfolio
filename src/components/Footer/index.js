import React from 'react';

import { Container, Contact, Attr, Icon } from "./style";
import githubIcon from "../../img/icons/github.svg";
import gmailIcon from "../../img/icons/gmail.svg";




export default function Footer() {
  return (
    <Container>
      <Attr>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </p>
        <p>
          Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from
          <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </p>
      </Attr>
      <Contact>
        <a href="mailto:jodyanna14.15@gmail.com"><Icon src={gmailIcon} alt="gmail.svg" /></a>
        <a href="https://github.com/jodyanna"><Icon src={githubIcon} alt="github.svg" /></a>
      </Contact>
    </Container>
  );
}