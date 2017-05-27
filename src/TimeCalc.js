import React, { Component } from 'react';
import TimeSpanFields from './TimeSpanFields';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Results from './Results';
import moment from 'moment'
import 'moment-duration-format';

class TimeCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFields1: ['', '', '', ''],
      timeFields2: ['', '', '', ''],
      operation: 'add',
      results: null
    }
    this.change = this.change.bind(this);
    this.changeTimeField = this.changeTimeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  change(event, value) {
    this.setState({
      [event.target.name]: value
    }) 
  }

  changeTimeField(event, value) {
    const name = event.target.name;
    const idx = event.target.getAttribute('data-idx');
    let newArray = this.state[name];
    newArray[idx] = value
    this.setState({
      [name]: newArray
    })
  }

  // expects time field array, returning
  parseTimeField(field) {
    if (field === '') {
      return 0;
    }
    else {
      return parseInt(field, 10);
    }
  }

  // expects parsed time field array, returns a duration object
  durationFromTimeField(tf) {
    return moment.duration({
      days: tf[0],
      hours: tf[1],
      minutes: tf[2],
      seconds: tf[3]
    });
  }

  handleSubmit() {
    // parse time fields
    const tf1 = this.state.timeFields1.map(this.parseTimeField);
    const tf2 = this.state.timeFields2.map(this.parseTimeField);

    // create moment.js durations from parsed time fields
    const duration1 = this.durationFromTimeField(tf1);
    const duration2 = this.durationFromTimeField(tf2);

    // perform operation on durations
    let result = null;
    const op = this.state.operation;
    if (op === 'add') {
      result = duration1.add(duration2);
    }
    else if (op === 'subtract') {
      result = duration1.subtract(duration2);
    }

    // format operation result and store it in state
    /**
     * TODO: moment-duration-format is currently bugged and cuts off the negative sign for negative durations.
     * This has been fixed on the dev branch, but not merged to master and the npm package.  If not merged, fork
     * it and create own package.  There are some good issues and pull requests to look at, too.
     */ 
    const format = 'd [days], h [hours], m [minutes], s [seconds]';
    this.setState({
      results: result.format(format)
    })
  }

  render() {
    return (
      <div>
        <h1>Add or Subtract Lengths of Time</h1>
        <form>
          <div className="fields">
            <TimeSpanFields 
              values={this.state.timeFields1}
              name='timeFields1'
              change={this.changeTimeField}
            />
            <RadioButtonGroup 
              name="operation" 
              valueSelected={this.state.operation}
              onChange={this.change}
            >
              <RadioButton
                value="add"
                label="Add"
              />
              <RadioButton
                value="subtract"
                label="Subtract"
              />
            </RadioButtonGroup>
            <TimeSpanFields 
              values={this.state.timeFields2}
              name='timeFields2'
              change={this.changeTimeField}
            />
          </div>
          <Results 
            handleSubmit={this.handleSubmit}
            results={this.state.results}
          />
        </form>
      </div>
      
    )
  }
}

export default TimeCalc;
