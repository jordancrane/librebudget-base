import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { accountStatus } from './constants';
import NestedList from './NestedList';

const drawerWidth = 240;

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
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function Sidebar(props) {
  const { classes } = props;

  return (
    //TODO: Move AppBar out of Sidebar into it's own file
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
            {props.title}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <SidebarContent 
          onViewSelect={props.onViewSelect}
          views={props.views}
          accounts={props.accounts}
        />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

function SidebarContent(props) {
  const budgetAccounts = props.accounts.filter((account) => account.status === accountStatus.budget);
  // TODO: Add support for more account types
  //const offBudgetAccounts = props.accounts.filter((account) => account.status === accountStatus.offBudget);
  //const closedAccounts = props.accounts.filter((account) => account.status === accountStatus.closed);

  return (
    <NestedList 
      views={props.views}
      budgetAccounts={budgetAccounts}
      onViewSelect={props.onViewSelect}
    />
  );
}


Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);