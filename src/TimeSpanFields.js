import React, { Component } from 'react';
import TextField from 'material-ui/TextField'


class TimeSpanFields extends Component {
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Days"
        />
        <TextField
          floatingLabelText="Hours"
        />
        <TextField
          floatingLabelText="Minutes"
        />
        <TextField
          floatingLabelText="Seconds"
        />
      </div>
    )
  }
}

export default TimeSpanFields;