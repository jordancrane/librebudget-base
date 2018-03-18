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
        name="Checking" 
        id={0}
        status={accountStatus.budget}
      />,
      <Account
        name="Savings" 
        id={1}
        status={accountStatus.budget}
      />,
      <Account
        name="Credit Card" 
        id={2}
        status={accountStatus.budget}
      />
    ];
  }

  selectView(view, account) {
    this.setState({
      view: view, 
    });
  }
  
  render() {
    return (
      <AppWindow
        title={<AppTitle>LibreBudget</AppTitle>}
        views={appViews}
        accounts={this.accounts}
        onViewSelect={this.selectView}
      >
        <ContentArea appView={this.state.view}/>
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
