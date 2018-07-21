import React from 'react';
import { removeNote } from '../action/notes';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import moment from 'moment';

const NoteItem = ({ title, description, created_at: date, dispatch, id }) => (
  <div className="note">
    <h3 className="note__title">{title}</h3>
    <p className="note__description">{description}</p>
    <span className="note__date">
      {moment(date)
        .locale('ru')
        .format('LLL')}
    </span>

    <button
      className="note__remove"
      onClick={() => {
        dispatch(removeNote({ id }));
      }}
    >
      remove
    </button>
    <Link to={`/edit/${id}`}>edite</Link>
  </div>
);

export default connect()(NoteItem);
