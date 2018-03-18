import React from 'react';
import Drawer from 'material-ui/Drawer';
import SidebarList from './SidebarList';

function Sidebar(props) {
  return (
    <Drawer
      variant="permanent"
      classes={{paper: props.classes.drawerPaper}}
    >
      <div className={props.classes.toolbar} />
      <SidebarList 
        onViewSelect={props.onViewSelect}
        views={props.views}
        accounts={props.accounts}
      />
    </Drawer>
  );
}

export default Sidebar;