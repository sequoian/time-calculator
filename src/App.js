import React, { Component } from 'react';
import './App.css';
import DateTimeCalculator from './DateTimeCalc';
import TimeCalcuator from './TimeCalc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem} from 'material-ui/List';

injectTapEventPlugin();

const PAGES = {
  DATETIMECALC: 'dt+-dt',
  TIMECALC: 'ln+-ln'
}

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
  constructor(props) {
    super(props);
    this.state = {
      currentPage: PAGES.DATETIMECALC
    }
  }
  render() {
    let calculator = null;
    if (this.state.currentPage === PAGES.DATETIMECALC) {
      calculator = <DateTimeCalculator />
    }
    else if (this.state.currentPage === PAGES.TIMECALC) {
      calculator = <TimeCalcuator />
    }

    return (
      <div className="App">
        <MuiThemeProvider>
          <div className="main">
            <SideBar />
            <div className="calculator">
              {calculator}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
