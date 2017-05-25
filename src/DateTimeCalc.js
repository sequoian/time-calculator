import React, { Component } from 'react';
import DateTimeFields from './DateTimeFields';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class DateTimeCalc extends Component {
  render() {
    return (
      <div>
        <h1>Add or Subtract Moments in Time</h1>
        <form>
          <div className="fields">
            <DateTimeFields />
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
            <DateTimeFields />
          </div>
        </form>
      </div>
      
    )
  }
}

export default DateTimeCalc;
