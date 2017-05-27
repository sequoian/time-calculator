import React, { Component } from 'react';
import DateTimeFields from './DateTimeFields';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Results from './Results';
import moment from 'moment'

class DateTimeCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: null,
      time1: null,
      date2: null,
      time2: null,
      results: null
    }
    this.changeFirstDate = this.changeFirstDate.bind(this);
    this.changeFirstTime = this.changeFirstTime.bind(this);
    this.changeSecondDate = this.changeSecondDate.bind(this);
    this.changeSecondTime = this.changeSecondTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeFirstDate(x, value) {
    this.setState({
      date1: moment(value)
    });
  }

  changeFirstTime(x, value) {
    this.setState({
      time1: moment(value)
    });
  }

  changeSecondDate(x, value) {
    this.setState({
      date2: moment(value)
    });
  }

  changeSecondTime(x, value) {
    this.setState({
      time2: moment(value)
    });
  }

  // Expects moment.js dateimes or null values, returns a single moment.js datetime
  // Isolates the date from date's datetime, and the time for time's datetime
  createDateTime(date, time) {
    // set default values for any inputs that were not chosen
    if (!date) {
      date = moment();
    }
    if (!time) {
      time = moment();
    }

    return moment({
      y: date.year(),
      M: date.month(),
      d: date.date(),
      h: time.hour(),
      m: time.minute(),
      s: 0,
      ms: 0
    })
  }

  handleSubmit() {
    // combine the dates and times
    const datetime1 = this.createDateTime(this.state.date1, this.state.time1);
    const datetime2 = this.createDateTime(this.state.date2, this.state.time2);

    // convert datetimes into timestamps and perform operation
    const timestamp1 = datetime1.valueOf();
    const timestamp2 = datetime2.valueOf();
    const result = moment.duration(timestamp1 - timestamp2);

    // convert timestamp back into a duration, then format and store into state
    /**
     * TODO: fix moment-duration-format
     */
    const format = 'd [days], h [hours], m [minutes], s [seconds]';
    this.setState({
      results: result.format(format)
    })
  }

  render() {
    return (
      <div>
        <h1>Difference Between Two Datetimes</h1>
        <form>
          <div className="fields">
            <DateTimeFields 
              handleDateChange={this.changeFirstDate}
              handleTimeChange={this.changeFirstTime}
            />
            <RadioButtonGroup 
              name="operation"
              valueSelected="subtract"
            >
              <RadioButton
                value="subtract"
                label="Subtract"
              />
            </RadioButtonGroup>
            <DateTimeFields
              handleDateChange={this.changeSecondDate}
              handleTimeChange={this.changeSecondTime}
            />
          </div>
          <Results 
            handleSubmit={this.handleSubmit}
            results={this.state.results}
          />
        </form>
      </div>
      
    )
  }
}

export default DateTimeCalc;
