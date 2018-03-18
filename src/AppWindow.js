import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Sidebar from './Sidebar';

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

function AppWindow(props) {
  const { classes } = props;

  return (
    //TODO: Move AppBar out of Sidebar into it's own file
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
            {props.title}
        </Toolbar>
      </AppBar>
      <Sidebar 
        classes={classes} 
        onViewSelect={props.onViewSelect}
        views={props.views}
        accounts={props.accounts}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

AppWindow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppWindow);