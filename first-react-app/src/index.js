import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavComponent from './NavComponent';
import Section from './Section';

const App = () => (
    <MuiThemeProvider>
        <NavComponent />
        <Section />
    </MuiThemeProvider>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
