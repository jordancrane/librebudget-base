import React, { Component } from 'react';
import MainContainer from './MainContainer'
import { accountStatus, appViews, appView } from './constants';
import ContentArea from './ContentArea';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: appView.budget,
      accountId: 0
    };

    this.selectView = this.selectView.bind(this);

    // TODO: Load/store this using JSON
    this.accounts = [
      {
        text: 'Checking', 
        status: accountStatus.budget,
        id: 1
      },
      {
        text: 'Savings',
        status: accountStatus.budget,
        id: 2
      },
      {
        text: 'Credit Card',
        status: accountStatus.budget,
        id: 3
      },
    ];
  }

  selectView(view) {
    this.setState({view: view});
  }
  
  render() {
    return (
      <MainContainer
        content={<ContentArea appView={this.state.view}/>}
        views={appViews}
        accounts={this.accounts}
        onViewSelect={this.selectView}
      />
    );
  }
}

export default App;
