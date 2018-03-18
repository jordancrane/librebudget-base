import React, { Component } from 'react';
import { accountStatus, appViews, appView } from './constants';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  }
});

function ContentArea(props) {
  let view;
  const { classes } = props;

  switch (props.appView) {
    case appView.budget:
      view = <BudgetView />;
      break;
    case appView.reports:
      view = <ReportsView />;
      break;
    case appView.accounts:
      //TODO: Allow switching between various accounts in AccountsView
      view = <AccountsView />;
      break;
    default:
      throw("Not a valid view");
  }

  return(
    <main className={classes.content}>
      <div className={props.toolbar} />
      {view}
    </main>
  );
}

function BudgetView(props) {
  return <h1>Hello, Budget View!</h1>;
}

function ReportsView(props) {
  return <h1>Hello, Reports View!</h1>;
}

function AccountsView(props) {
  return (
    <h1>Hello, Accounts View!</h1>
  );
}

ContentArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentArea);