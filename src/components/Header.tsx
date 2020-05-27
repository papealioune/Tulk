import React, { Component } from 'react';

type HeaderLink = {
  label: String
  routeTo: String
}

export class Header extends Component<{}, HeaderLink> {
  
  render() {
    return <p>Your Eth address is {`https://etherscan.io/address/${this}`}</p>
  }
}