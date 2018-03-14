import React, { Component } from 'react';
import MainContainer from './MainContainer'
import StarBorder from 'material-ui-icons/StarBorder';
import { accountStatus, appView } from './constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: appView.budget
    };

    this.selectView = this.selectView.bind(this);

    // TODO: Load/store this using JSON
    this.accounts = [
      {
        text: 'Checking', 
        status: accountStatus.budget,
        id: 0
      },
      {
        text: 'Savings',
        status: accountStatus.budget,
        id: 1
      },
      {
        text: 'Credit Card',
        status: accountStatus.budget,
        id: 2
      },
    ];

    this.views = [
      {
        text: 'Budget', 
        id: 0,
        appView: appView.budget,
        icon: <StarBorder />
      },
      {
        text: 'Reports',
        id: 1,
        appView: appView.reports,
        icon: <StarBorder />
      },
      {
        text: 'All Accounts',
        id: 2,
        appView: appView.accounts,
        icon: <StarBorder />
      },
    ];

  }

  selectView(view) {
    this.setState({view: view});
  }
  
  render() {
    return (
      <MainContainer
        content={<AppView appView={this.state.view}/>}
        views={this.views}
        accounts={this.accounts}
        onViewSelect={this.selectView}
      />
    );
  }
}

function AppView(props) {
  switch (props.appView) {
    case appView.budget:
      return <BudgetView />;
    case appView.reports:
      return <ReportsView />;
    case appView.accounts:
      return <AccountsView />;
    default:
      throw("Not a valid view");
  }
}

function BudgetView(props) {
  return <h1>Hello, Budget View!</h1>;
}

function ReportsView(props) {
  return <h1>Hello, Reports View!</h1>;
}

function AccountsView(props) {
  return <h1>Hello, Accounts View!</h1>;
}

export default App;
