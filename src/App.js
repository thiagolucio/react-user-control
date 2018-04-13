import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Form from './form/Form';
import List from './list/List';


injectTapEventPlugin();

class App extends Component { 

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/List" component={List} />
          <Route path="/Form" component={Form} />
        </Switch>
      </div>
    );
  }
}
export default App;
