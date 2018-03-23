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
      // TODO: Load/store this using JSON
      // TODO: Does this really belong in app? Would Redux be a better solution?
      accounts: [],
    };

    this.selectView = this.selectView.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.entityId = 3;

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
    const accounts = this.state.accounts;
    const newAccount = {
      accountName: accountName,
      accountType: accountType,
      onBudget: onBudget === "true",
      entityType: "account",
      entityId: this.entityId,
      hidden: false,
    };
    accounts.push(newAccount);
    this.setState({accounts: accounts});
    this.entityId += 1;
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
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);