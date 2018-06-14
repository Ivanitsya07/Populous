import 'react-dates/lib/css/_datepicker.css';
import '../../libs/react-dates/index.css';

import React from 'react';
import {DateRangePicker} from 'react-dates'
import {END_DATE, START_DATE} from 'react-dates/constants'

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    if(this.props.onChange){
      this.props.onChange({ startDate, endDate });
    }
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    const inner = this.props.inner || {};

    return (
      <div>
        <DateRangePicker
          startDateId={START_DATE}
          endDateId={END_DATE}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={this.props.startDate || startDate}
          endDate={this.props.endDate || endDate}
          {...inner}
        />
      </div>
    );
  }
}

export default DateRangePickerWrapper;
