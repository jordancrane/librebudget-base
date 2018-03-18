import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = (theme) => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
});

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
    const { classes } = this.props;

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
                <ListItem button className={classes.nested} key={account.id}>
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

AccountList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountList);