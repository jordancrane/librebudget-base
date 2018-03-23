import React from 'react';
import { appView } from './constants';
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
      view = <AccountsView 
        accounts={props.accounts} 
        displayEntityId={props.displayEntityId}
        transactions={props.transactions}
        payees={props.payees}
      />;
      break;
    default:
      throw("Not a valid view", props.appView);
  }

  return(
    <main className={classes.content}>
      <div className={props.toolbar} />
      {view}
    </main>
  );
}

function BudgetView(props) {
  //TODO: Flesh out budget view
  return <h1>Hello, Budget View!</h1>;
}

function ReportsView(props) {
  //TODO: Flesh out reports view
  return <h1>Hello, Reports View!</h1>;
}

function AccountsView(props) {
  //TODO: Flesh out accounts view
  let accountName, transactions;
  if (props.displayEntityId === -1) {
    accountName = "All Accounts"
    transactions = props.transactions;
  } else {
    let account = props.accounts.find(account => account.entityId === props.displayEntityId);
    accountName = account.accountName;
    transactions = props.transactions.filter(transaction => transaction.accountId === account.entityId);
  }

  return (
    <div>
      <h1>Hello, Accounts View!</h1>
      <h2>Account: {accountName}</h2>
      <h2>Transactions:</h2>
      <ul>
        {/*TODO: Create an actual table for transactions*/}
        {transactions.map(transaction => {
          return (
            <li key={transaction.entityId}>
              {transaction.date} | {
              props.payees.find(payee => payee.entityId === transaction.payeeId).name} | {
              transaction.amount}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ContentArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentArea);