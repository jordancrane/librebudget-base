import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  constructor (props) {
    super(props);
    this.state = { open: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previousState) => ({ 
      open: !previousState.open 
    }));
  };

  render() {
    const { classes, views, budgetAccounts } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItemButtons items={views} />
          <Divider/>
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Budget Accounts" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButtons items={budgetAccounts} className={classes.nested}/>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

function ListItemButtons(props) {
  //TODO: Is this the best way to abstract this functionality? 
  return (
    props.items.map((item) => {
      let icon = null;
      if (item.icon) {
        icon = (
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
        );
      }

      return (
        <ListItem button className={props.className} key={item.id}>
          {icon}
          <ListItemText inset primary={item.text} />
        </ListItem>
      );
    })
  );
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);