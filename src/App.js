import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import { appViews, appView } from './constants';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    vh: 100,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: appView.budget,
      account: 0,
      // TODO: Load/store accounts/transactions/etc... using JSON
      // TODO: Does this really belong in app? Would Redux be a better solution?
      accounts: [],
      transactions: [],
      payees: [{
        //TODO: Create special payees at budget creation time
        payeeName: "Starting Balance",
        entityId: "P0", // Special payees get entityIds of form Px where x increments from 0
      }],
    };

    this.selectView = this.selectView.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.createTransaction = this.createTransaction.bind(this);

    this.createAccount(
      "My Account",
      200,
      new Date().toISOString().split('T')[0],
      "Checking",
      "true"
    );
    [
      {
        accountId: this.state.accounts[0].entityId,
        payeeId: "P0",
        amount: 100,
        date: new Date().toISOString().split('T')[0],
        category: "foo"
      },
      {
        accountId: this.state.accounts[0].entityId,
        payeeId: "P0",
        amount: -200,
        date: new Date().toISOString().split('T')[0],
        category: "bar"
      },
      {
        accountId: this.state.accounts[0].entityId,
        payeeId: "P0",
        amount: 50,
        date: new Date().toISOString().split('T')[0],
        category: "foobar"
      }
    ].forEach(t => this.createTransaction(
      t.date,
      t.accountId,
      t.payeeId,
      t.amount,
      t.category,
    ));
  }

  selectView(view, displayEntityId = -1) {
    this.setState({
      view: view, 
      displayEntityId: displayEntityId
    });
  }

  createAccount(
    accountName,
    currentBalance,
    currentBalanceDate,
    accountType,
    onBudget, 
  ){
    const { accounts, transactions } = this.state;

    const newAccount = {
      entityId: createUuid(),
      accountName,
      accountType,
      onBudget: onBudget === "true",
      hidden: false,
    };

    const newTransaction = {
      entityId: createUuid(),
      accountId: newAccount.entityId,
      payeeId: "P0",
      amount: currentBalance,
      date: currentBalanceDate,
    };

    accounts.push(newAccount);
    transactions.push(newTransaction);
    this.setState({
      accounts: accounts,
      transactions: transactions,
    });
  }

  createTransaction(
    date,
    accountId,
    payeeId,
    amount,
    category,
    memo = null,
  ){
    const { transactions } = this.state;
    const newTransaction = { 
      entityId: createUuid(), date, accountId, payeeId, amount, category, memo
    };
    transactions.push(newTransaction);
    this.setState({ transactions });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              LibreBudget
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar 
          onViewSelect={this.selectView}
          onAddAccount={this.addAccount}
          views={appViews}
          accounts={this.state.accounts}
          toolbar={classes.toolbar}
          onCreateAccount={this.createAccount}
        />
        <ContentArea 
          accounts={this.state.accounts}
          appView={this.state.view}
          displayEntityId={this.state.displayEntityId}
          toolbar={classes.toolbar}
          transactions={this.state.transactions}
          payees={this.state.payees}
        />
      </div>
    );
  }
}

function createUuid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : ((r&0x3)|0x8);
        return v.toString(16);
    });
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);