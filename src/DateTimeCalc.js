import React, { Component } from 'react';
import DateTimeFields from './DateTimeFields';

class DateTimeCalc extends Component {
  render() {
    return (
      <div>
        <h1>Add or Subtract Moments in Time</h1>
        <DateTimeFields />
      </div>
      
    )
  }
}

export default DateTimeCalc;
