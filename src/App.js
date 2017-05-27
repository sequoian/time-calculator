import React, { Component } from 'react';
import './App.css';
import DateTimeCalculator from './DateTimeCalc';
import TimeCalcuator from './TimeCalc';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import PropTypes from 'prop-types';

injectTapEventPlugin();

const PAGES = {
  DATETIMECALC: 'dt+-dt',
  TIMECALC: 'ln+-ln'
}

// create a higher order component that allows material-ui list to be selectable
let SelectableList = makeSelectable(List);
function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      });
    }

    handleChange = (event, index) => {
      this.setState({
        selectedIndex: index
      });
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  }
}
SelectableList = wrapState(SelectableList);

class SideBar extends Component {
  render() {
    return (
      <SelectableList defaultValue={1} className="side-bar">
        <ListItem 
          primaryText="Difference Between Two Datetimes"
          onClick={() => this.props.changePage(PAGES.DATETIMECALC)}
          value={1}
        />
        <ListItem 
          primaryText="Add or Subtract Lengths of Time" 
          onClick={() => this.props.changePage(PAGES.TIMECALC)}
          value={2}
        />
      </SelectableList>
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
