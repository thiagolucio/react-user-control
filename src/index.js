import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { pink600, blue500 } from 'material-ui/styles/colors';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink600,
        accent1Color: blue500
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
            <App/>        
    </BrowserRouter>
        
    </MuiThemeProvider>, document.getElementById('root')
);
registerServiceWorker();
