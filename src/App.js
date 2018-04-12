import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Login from './login/Login';


injectTapEventPlugin();

class App extends Component { 

  render() {
    return (
      <div>
           <Login/>    
      </div>
    );
  }
}
export default App;
