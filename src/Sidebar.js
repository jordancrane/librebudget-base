import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AccountList from './AccountList';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

function Sidebar(props) {
  const { classes } = props;
  const budgetAccounts = props.accounts.filter((account) => account.onBudget === true);
  // TODO: Add support for more account types
  //const offBudgetAccounts = props.accounts.filter((account) => account.status === accountStatus.offBudget);
  //const closedAccounts = props.accounts.filter((account) => account.status === accountStatus.closed);

  return (
    <Drawer
      variant="permanent"
      classes={{paper: classes.drawerPaper}}
    >
      <div className={props.toolbar}/>
      <div className={classes.root}>
        <List component="nav">
          <ViewList 
            views={props.views}
            onViewSelect={props.onViewSelect}
          />
          <Divider/>
          <AccountList 
            category="Budget Accounts"
            accounts={budgetAccounts}
            onViewSelect={props.onViewSelect}
          />
          {/*TODO: Add off-budget and closed accounts*/}
          {/*
          <AccountList 
            classes={classes}
            category="Off-Budget Accounts"
            accounts={offBudgetAccounts}
          />
          <AccountList 
            classes={classes}
            category="Closed Accounts"
            accounts={closedAccounts}
          />
          */}
        </List>
      </div>
    </Drawer>
  );
}

function ViewList(props) {
  return (
    props.views.map((view) => {
      return (
        <ListItem button key={view.id} onClick={() => props.onViewSelect(view.appView)}>
          <ListItemIcon>
            {view.icon}
          </ListItemIcon>
          <ListItemText inset primary={view.text} />
        </ListItem>
      )
    })
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);