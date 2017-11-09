import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {purple300} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    textColor: purple300,
  },
  appBar: {
    color: purple300,
    height: 50
  },
  raisedButton: {
    color: purple300,
  },
});

const Page = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="My Todo App" />
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
