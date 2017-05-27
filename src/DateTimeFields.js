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
          onChange={this.props.handleDateChange}
        />
        <TimePicker 
          hintText="Select time"
          onChange={this.props.handleTimeChange}
        />
      </div>
    )
  }
}

export default DateTimeFields;
