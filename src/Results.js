import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Results extends Component {
  render() {
    return (
      <div>
        <RaisedButton
          label="Calculate"
          primary={true}
          onClick={this.props.handleSubmit}
        />
        {this.props.results ? <span className="results">{this.props.results}</span> : null}
      </div>
    )
  }
}

export default Results;
