import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import { accountStatus } from './constants';

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
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

function Sidebar(props) {
  const { classes, views } = props;
  const budgetAccounts = props.accounts.filter((account) => account.status === accountStatus.budget);
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
            classes={classes}
            category="Budget Accounts"
            accounts={budgetAccounts}
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
    props.views.map((item) => {
      return (
        <ListItem button key={item.id} onClick={() => props.onViewSelect(item.appView)}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText inset primary={item.text} />
        </ListItem>
      )
    })
  );
}

class AccountList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previousState) => ({ 
      open: !previousState.open 
    }));
  };

  render() {
    return (
        <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={this.props.category}/>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {this.props.accounts.map((account) => {
              return (
                <ListItem button className={this.props.classes.nested} key={account.id}>
                  <ListItemText inset primary={account.name} />
                </ListItem>
              )
            })}
          </List>
        </Collapse>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);