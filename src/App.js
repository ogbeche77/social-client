import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from'@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import Navbar from './components/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#009688',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  },
  typography: {
    useNextVariants: true
  }

});

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
       <Router>
       <Navbar/>
       <div className="container">
       <Switch>
       <Route exact path = "/" component={home}/>
       <Route exact path = "/login" component={login}/>
       <Route exact path = "/signup" component={signup}/>
       </Switch>
       </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }   
      
}

export default App;
