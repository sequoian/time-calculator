import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

const fields = [
  'Days',
  'Hours',
  'Minutes',
  'Seconds'
]

const styles = {
  display: 'block',
  width: '100px'
}

class TimeSpanFields extends Component {
  render() {
    return (
      <div>
        {
          fields.map((item, idx) => (
            <TextField
              key={idx}
              floatingLabelText={item}
              type="number"
              style={styles}
            />
          ))
        }
      </div>
    )
  }
}

export default TimeSpanFields;