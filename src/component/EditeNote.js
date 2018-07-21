import React from 'react';
import { connect } from 'react-redux';

import { editNote } from '../action/notes';

import NotesFrom from './NotesForm';

const EditeNote = props => (
  <div>
    <NotesFrom
      note={props.note}
      onSubmit={updates => {
        props.dispatch(editNote(props.note.id, updates));
        props.history.push('/');
      }}
    />
  </div>
);

const mapState = (state, ownProps) => {
  return {
    note: state.notes.find(note => {
      return note.id === ownProps.match.params.id;
    })
  };
};
export default connect(mapState)(EditeNote);
