import React from 'react';
import { connect } from 'react-redux';
import selectorNotes from '../selectors/notes';
import NoteItem from './NoteItem';

const NotesList = props => {
  const { notes, dispatch } = props;
  return (
    <div>
      <h1>Notes List</h1>
      {notes.map(note => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </div>
  );
};

const mapState = state => {
  return {
    notes: selectorNotes(state.notes, state.filters)
  };
};
export default connect(mapState)(NotesList);
