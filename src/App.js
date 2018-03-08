import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBanner from './components/TitleBanner';
import SwitchBoard from './components/SwitchBoard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <TitleBanner />
          <SwitchBoard />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;