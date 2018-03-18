import React, { Component } from 'react';
import { accountStatus, appViews, appView } from './constants';

function ContentArea(props) {
  switch (props.appView) {
    case appView.budget:
      return <BudgetView />;
    case appView.reports:
      return <ReportsView />;
    case appView.accounts:
      //TODO: Allow switching between various accounts in AccountsView
      return <AccountsView account={props.account}/>;
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
  return (
    <h1>Hello, {props.account.name}!</h1>
  );
}

export default ContentArea;