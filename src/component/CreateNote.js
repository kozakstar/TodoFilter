import React from 'react';
import NotesForm from './NotesForm';

import { addNote } from '../action/notes';

import { connect } from 'react-redux';

const CreateNote = props => (
  <div>
    <h2>Add Note</h2>
    <NotesForm
      onSubmit={expenses => {
        props.dispatch(addNote(expenses));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(CreateNote);
