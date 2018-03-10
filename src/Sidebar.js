import React from 'react';
import Typography from 'material-ui/Typography';
import ClippedDrawer from './ClippedDrawer';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';

class Sidebar extends React.Component {
  render() {
    return (
      <ClippedDrawer
        title={<AppTitle />}
      >
        <h1> Hello, sidebar</h1>
      </ClippedDrawer>
    );
  }
}

function SidebarContent(props) {
  return (
    <List>
      <ListItem></ListItem>
      <Divider/>
      <ListItem></ListItem>
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