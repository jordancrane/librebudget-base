import React, { Component } from 'react';
import MainContainer from './MainContainer'
import StarBorder from 'material-ui-icons/StarBorder';
import accountStatus from './constants';

class App extends Component {
  constructor(props) {
    super(props);

    // TODO: Load/store this using JSON
    this.accounts = [
      {
        text: 'Checking', 
        status: accountStatus.budget,
        id: 0,
        icon: null
      },
      {
        text: 'Savings',
        status: accountStatus.budget,
        id: 1,
        icon: null
      },
      {
        text: 'Credit Card',
        status: accountStatus.budget,
        id: 2,
        icon: null
      },
    ];

    this.views = [
      {
        text: 'Budget', 
        id: 0,
        icon: <StarBorder />
      },
      {
        text: 'Reports',
        id: 1,
        icon: <StarBorder />
      },
      {
        text: 'All Accounts',
        id: 2,
        icon: <StarBorder />
      },
    ];
  }
  
  render() {
    return (
      <MainContainer
        content={<h1>Hello, content!</h1>}
        views={this.views}
        accounts={this.accounts}
      />
    );
  }
}

export default App;
