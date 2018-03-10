import React from 'react';
import Typography from 'material-ui/Typography';
import ClippedDrawer from './ClippedDrawer';
import NestedList from './NestedList';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import StarBorder from 'material-ui-icons/StarBorder';

class Sidebar extends React.Component {
  render() {
    return (
      <ClippedDrawer
        title={<AppTitle />}
        drawerContent={<DrawerContent />}
        onClickBudget={this.showBudget}
        onClickReports={this.showReports}
        onClickAllAccounts={this.showAllAccounts}
      >
        <h1> Hello, sidebar</h1>
      </ClippedDrawer>
    );
  }
}

function DrawerContent(props) {
  const views = [
    {
      text: 'Budget', 
      icon: <StarBorder />
    },
    {
      text: 'Reports',
      icon: <StarBorder />
    },
    {
      text: 'All Accounts',
      icon: <StarBorder />
    },
  ];
  const budgetAccounts = [
    {
      text: 'Checking', 
      icon: null
    },
    {
      text: 'Savings',
      icon: null
    },
    {
      text: 'Credit Card',
      icon: null
    },
  ];

  return (
    <NestedList 
      views={views}
      budgetAccounts={budgetAccounts}
    />
  );
}

class SimpleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <div>
        <List>
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Something"/>
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List>
              {this.props.views.map((view) => {
                return (
                  <ListItem button>
                    <ListItemText primary={view.text}/>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

function AppTitle(props) {
  return (
    <Typography variant="title" color="inherit" noWrap>
      LibreBudget
    </Typography>
  );
}

export default Sidebar;