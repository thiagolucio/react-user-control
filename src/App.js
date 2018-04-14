import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Form from './form/Form';
import FormX from './form/FormX';
import UserList from './UsersList/UsersList';


injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/UserList" component={UserList} />
          <Route path="/Form" component={Form} />
          <Route path="/FormX" component={FormX} />          
        </Switch>
      </div>
    );
  }
}
export default App;
