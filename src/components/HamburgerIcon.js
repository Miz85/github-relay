import React, { Component } from 'react';
import { grey800 } from 'material-ui/styles/colors';

const styles = {
  display: 'inline-block',
  color: 'rgb(255, 255, 255)',
  fill: grey800,
  height: '24px',
  width: '24px',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
}

class HamburgerIcon extends Component {
  render() {
    return (
      <svg
        viewBox="0 0 24 24" style={styles}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
    )
  }
}

export default HamburgerIcon;
