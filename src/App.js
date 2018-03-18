import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import { accountStatus, appViews, appView } from './constants';
import Account from './Account';
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

  selectView(view) {
    this.setState({
      view: view, 
    });
  }

  render() {
    const { classes } = this.props;

    return (
      //TODO: Move AppBar out of Sidebar into it's own file
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
          appView={this.state.view}
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