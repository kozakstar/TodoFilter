import React from 'react';
import NotesList from '../component/NotesList';
import NotesFilter from '../component/NotesFilter';
const NotePage = () => (
  <div className="container">
    <NotesFilter />
    <NotesList />
  </div>
);

export default NotePage;
