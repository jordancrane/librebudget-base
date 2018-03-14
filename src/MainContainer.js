import React from 'react';
import Typography from 'material-ui/Typography';
import Sidebar from './Sidebar';

class MainContainer extends React.Component {
  render() {
    return (
      <Sidebar
        title={<AppTitle />}
        onViewClick={this.props.showView}
        views={this.props.views}
        accounts={this.props.accounts}
        onViewSelect={this.props.onViewSelect}
      >
        {this.props.content}
      </Sidebar>
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

export default MainContainer;