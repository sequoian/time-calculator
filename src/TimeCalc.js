import React, { Component } from 'react';
import TimeSpanFields from './TimeSpanFields';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Results from './Results';

class TimeCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFields1: ['', '', '', ''],
      timeFields2: ['', '', '', ''],
      operation: 'add'
    }
    this.change = this.change.bind(this);
    this.changeTimeField = this.changeTimeField.bind(this);
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
            results="1 year, 14 days, 22 minutes"
          />
        </form>
      </div>
      
    )
  }
}

export default TimeCalc;