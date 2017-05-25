import React, { Component } from 'react';
import './App.css';
//import DateTimeCalculator from './DateTimeCalc';
import TimeCalcuator from './TimeCalc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <TimeCalcuator />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
