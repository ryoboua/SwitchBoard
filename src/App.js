import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBanner from './components/TitleBanner';
import ControlUnit from './components/ControlUnit'



class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBanner />
        <MuiThemeProvider>
          <ControlUnit />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;