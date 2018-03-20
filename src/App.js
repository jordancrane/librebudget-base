import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import { accountStatus, appViews, appView } from './constants';
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
      account: 0
    };

    this.selectView = this.selectView.bind(this);

    // TODO: Load/store this using JSON
    this.accounts = [
      {
        accountName: "Checking Account",
        accountType: "Checking",
        entityId: 0,
        entityType: "account",
        onBudget: true,
        hidden: false
      },
      {
        accountName: "Savings Account",
        accountType: "Savings",
        entityId: 1,
        entityType: "account",
        onBudget: true,
        hidden: false
      },
      {
        accountName: "Credit Card",
        accountType: "Credit Card",
        entityId: 2,
        entityType: "account",
        onBudget: true,
        hidden: false
      }
    ];
  }

  selectView(view, displayEntityId = -1) {
    this.setState({
      view: view, 
      displayEntityId: displayEntityId
    });
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
          views={appViews}
          accounts={this.accounts}
          toolbar={classes.toolbar}
        />
        <ContentArea 
          accounts={this.accounts}
          appView={this.state.view}
          displayEntityId={this.displayEntityId}
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