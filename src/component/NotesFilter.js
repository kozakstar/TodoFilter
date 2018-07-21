import React, { Component } from 'react';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { setTitleFillters, setStartDate, setEndDate } from '../action/filters';

import { DateRangePicker } from 'react-dates';

class NotesFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search notes..."
          value={this.props.filters.title}
          onChange={e => {
            const value = e.target.value.trim();
            this.props.dispatch(setTitleFillters(value));
          }}
        />
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          endDateId={uuid()}
          startDateId={uuid()}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapState = state => ({
  filters: state.filters
});
export default connect(mapState)(NotesFilters);
