import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';


class DateTimeFields extends Component {
  render() {
    return (
      <div>
        <DatePicker 
          hintText="Select date"
          locale="en-US"
        />
        <TimePicker 
          hintText="Select time"
        />
      </div>
    )
  }
}

export default DateTimeFields;
