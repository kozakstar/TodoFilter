import React, { Component } from 'react';
import moment from 'moment';

import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import '!style-loader!css-loader!react-dates/lib/css/_datepicker.css';

import uuid from 'uuid';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.note ? props.note.title : '',
      description: props.note ? props.note.description : '',
      created_at: props.note ? moment(props.note.created_at) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  handleOnTitle = e => {
    const title = e.target.value;
    this.setState({ title });
  };
  handleOnDescription = e => {
    const description = e.target.value;
    this.setState({ description });
  };
  onDateChange = created_at => {
    if (created_at) {
      this.setState({ created_at });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    if (!title || !description) {
      this.setState({ error: 'enter title and description' });
    } else {
      this.setState({ error: '' });
      this.props.onSubmit({
        title,
        description,
        created_at: this.state.created_at.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="title"
              name="title"
              id="title"
              autoFocus
              value={this.state.title}
              onChange={this.handleOnTitle}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="description"
              name="description"
              id="description"
              rows={5}
              value={this.state.description}
              onChange={this.handleOnDescription}
            />
          </div>
          <div>
            <SingleDatePicker
              date={this.state.created_at}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              id={uuid()}
              numberOfMonths={1}
            />
          </div>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
