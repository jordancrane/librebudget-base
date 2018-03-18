import React, { Component } from 'react';
import StarBorder from 'material-ui-icons/StarBorder';

const appView = {
  budget: 0,
  reports: 1,
  accounts: 2
}

const appViews = [
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

const accountStatus = {
  budget: 0,
  offBudget: 1,
  closed: 2
}

export { accountStatus, appView, appViews };