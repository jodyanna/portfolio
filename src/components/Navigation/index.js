import React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import NavButton from "./NavButton";

const Container = styled.nav`
  display: flex;

  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
  height: 50px;
`;


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleClick = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <Container>
        <NavButton label={"NAV"} onClick={this.handleClick} />
        <NavMenu isVisible={this.state.isVisible}
                 onClick={this.handleClick}
                 hr={this.props.hr}
        />
        <NavBar isButtonVisible={this.props.isButtonVisible} />
      </Container>
    );
  }
}