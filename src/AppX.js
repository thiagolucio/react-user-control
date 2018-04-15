import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import Login from './login/Login';
import LoginX from './login/LoginX';
import Form from './form/Form';
import FormX from './form/FormX';
import UserList from './UsersList/UsersList';
import { Provider } from 'react-redux';
import store from './redux/store';


injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Provider store={store}>
            <Route path="/" component={LoginX} exact />
          </Provider>,  
          <Route path="/UserList" component={UserList} />
          <Route path="/Form" component={Form} />
          <Route path="/FormX" component={FormX} />          
        </Switch>
      </div>
    );
  }
}
export default App;
