import React, { Component } from 'react';
import AppWindow from './AppWindow'
import { accountStatus, appViews, appView } from './constants';
import ContentArea from './ContentArea';
import Account from './Account';
import Typography from 'material-ui/Typography';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: appView.budget,
      account: 0
    };

    this.selectView = this.selectView.bind(this);

    // TODO: Load/store this using JSON
    this.accounts = [
      <Account
        name="All Accounts" 
        id={1}
        status={accountStatus.budget}
      />,
      <Account
        name="Checking" 
        id={1}
        status={accountStatus.budget}
      />,
      <Account
        name="Savings" 
        id={2}
        status={accountStatus.budget}
      />,
      <Account
        name="Credit Card" 
        id={3}
        status={accountStatus.budget}
      />
    ];
  }

  selectView(view, account) {
    this.setState({
      view: view, 
      account: account
    });
  }
  
  render() {
    return (
      <AppWindow
        title={<AppTitle>LibreBudget</AppTitle>}
        onViewClick={this.props.showView}
        views={appViews}
        accounts={this.accounts}
        onViewSelect={this.selectView}
      >
        <ContentArea appView={this.state.view} account={this.state.account}/>
      </AppWindow>
    );
  }
}

function AppTitle(props) {
  return (
    <Typography variant="title" color="inherit" noWrap>
      {props.children}
    </Typography>
  );
}

export default App;
