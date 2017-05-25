import React, { Component } from 'react';
import TimeSpanFields from './TimeSpanFields';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Results from './Results';

class TimeCalc extends Component {
  render() {
    return (
      <div>
        <h1>Add or Subtract Lengths of Time</h1>
        <form>
          <div className="fields">
            <TimeSpanFields />
            <RadioButtonGroup>
              <RadioButton
                value="add"
                label="Add"
              />
              <RadioButton
                value="subtract"
                label="Subtract"
              />
            </RadioButtonGroup>
            <TimeSpanFields />
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