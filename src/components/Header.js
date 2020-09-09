import React from 'react';
import styles from '../styles/modules/Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <header>
        <h1>Joseph D'Anna</h1>
        <hr/>
      </header>
    );
  }
}

export default Header;