import React, { Component } from 'react';

class Account extends Component {
  render() {
    return <h2>Account: {this.props.name}</h2>;
  }
}

export default Account;