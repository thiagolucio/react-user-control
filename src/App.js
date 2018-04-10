import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
// import logo from './logo.svg';
// import Form from './Form';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  _drawerToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>        
        <AppBar
          title="Control User App"
          onClick={this._drawerToggle}
          iconElementRight={<FlatButton label="Login" />} />
          
        <Drawer open={this.state.open} docked={false} onRequestChange={() => this._drawerToggle()}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>          
      </div>
    );
  }
}
export default App;
