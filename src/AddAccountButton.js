import React from 'react';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AddIcon from 'material-ui-icons/Add';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function AddAccountButton(props) {
  const { classes } = props;

  return (
    <Button className={classes.button} variant="raised" size="small" color="secondary" onClick={props.onClick}>
      <AddIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
      Add Account
    </Button>
  );
}

AddAccountButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddAccountButton);