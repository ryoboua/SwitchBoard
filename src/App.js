import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBanner from './components/TitleBanner';
import StartButton from './components/StartButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <TitleBanner />
          <StartButton />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
