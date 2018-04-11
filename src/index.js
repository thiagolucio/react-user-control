import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { pink600, blue500 } from 'material-ui/styles/colors';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink600,
        accent1Color: blue500
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root')
);
registerServiceWorker();
