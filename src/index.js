import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { pink600, blue500 } from 'material-ui/styles/colors';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './form/Form';
import Login from './login/Login';
import List from './list/List';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink600,
        accent1Color: blue500
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
            <App>        
                <Switch>
                    <Route path="/" component={App} exact/>
                    <Route path="/Login" component={Login} />
                    <Route path="/List" component={List} />
                    <Route path="/Form" component={Form} />
                </Switch>
            </App>        
    </BrowserRouter>
        
    </MuiThemeProvider>, document.getElementById('root')
);
registerServiceWorker();
