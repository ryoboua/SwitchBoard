import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QuestionnaireForm from './components/questionnaireForm';
import TitleBanner from './components/titleBanner';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <TitleBanner />
          
          <QuestionnaireForm />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
