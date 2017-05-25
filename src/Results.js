import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Results extends Component {
  render() {
    return (
      <div>
        <RaisedButton
          label="Calculate"
          primary={true}
        />
        <span className="results">{this.props.results}</span>
      </div>
    )
  }
}

export default Results;
