import React, { Component } from 'react';
import './App.css';
import DateTimeCalculator from './DateTimeCalc';
//import TimeCalcuator from './TimeCalc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem} from 'material-ui/List';

injectTapEventPlugin();

class SideBar extends Component {
  render() {
    return (
      <List className="side-bar">
        <ListItem primaryText="Add or Subtract Datetimes" />
        <ListItem primaryText="Add or Subtract Lengths of Time" />
      </List>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div className="main">
            <SideBar />
            <div className="calculator">
              <DateTimeCalculator />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
