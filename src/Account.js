import React, { Component } from 'react';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      id: props.id,
      status: props.status,
      //transactions: <TransactionGroup id={this.id}/>
    }
  }

  render() {
    return <h2>Account: {this.name}</h2>;
  }
}

export default Account;