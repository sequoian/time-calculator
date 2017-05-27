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
        <ListItem 
          primaryText="Difference Between Two Datetimes"
          onClick={() => this.props.changePage(PAGES.DATETIMECALC)}
        />
        <ListItem 
          primaryText="Add or Subtract Lengths of Time" 
          onClick={() => this.props.changePage(PAGES.TIMECALC)}
        />
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
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      currentPage: page
    })
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
            <SideBar changePage={this.changePage} />
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
