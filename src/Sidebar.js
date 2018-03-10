import React from 'react';
import Typography from 'material-ui/Typography';
import ClippedDrawer from './ClippedDrawer';
import Divider from 'material-ui/Divider';
import List, { ListItem } from 'material-ui/List';
import { Drawer } from 'material-ui';

class Sidebar extends React.Component {
  render() {
    return (
      <ClippedDrawer
        title={<AppTitle />}
        drawerContent={<DrawerContent />}
      >
        <h1> Hello, sidebar</h1>
      </ClippedDrawer>
    );
  }
}

function DrawerContent(props) {
  return (
    <List>
      <ListItem button>Budget</ListItem>
      <ListItem button>Reports</ListItem>
      <ListItem button>All Accounts</ListItem>
      <Divider />
    </List>
  );
}

function AppTitle(props) {
  return (
    <Typography variant="title" color="inherit" noWrap>
      LibreBudget
    </Typography>
  );
}

export default Sidebar;