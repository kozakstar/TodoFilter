import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const SET_TITLE_FILTER = 'SET_TITLE_FILTER';

const addNote = ({ title = '', description = '', created_at = 0 } = {}) => ({
  type: ADD_NOTE,
  note: {
    id: uuid(),
    description,
    title,
    created_at
  }
});
const removeNote = ({ id } = {}) => ({
  type: REMOVE_NOTE,
  id
});

const editNote = (id, updates) => {
  return {
    type: EDIT_NOTE,
    id,
    updates
  };
};

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case REMOVE_NOTE:
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case EDIT_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          return { ...note, ...action.updates };
        } else {
          return note;
        }
      });
    default:
      return state;
  }
};
const fillterDefault = {
  title: ''
};
const setTitleFillters = (title = '') => ({
  type: SET_TITLE_FILTER,
  title
});

const filltersReducer = (state = fillterDefault, action) => {
  switch (action.type) {
    case SET_TITLE_FILTER:
      return { ...state, title: action.title };
    default:
      return state;
  }
};
// fillterNotes
const fillterNotes = (notes, fillters) => {
  return notes.filter(note => {
    return note.title.toLowerCase().includes(fillters.title.toLowerCase());
  });
};

const store = createStore(
  combineReducers({
    notes: notesReducer,
    fillters: filltersReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibaleNote = fillterNotes(state.notes, state.fillters);
  console.log(visibaleNote);
});
const noteOne = store.dispatch(
  addNote({ title: 'pensil', description: 'newCar' })
);
const noteTwo = store.dispatch(
  addNote({ title: 'home', description: 'buyHome' })
);

// store.dispatch(removeNote({ id: noteTwo.note.id }));

// store.dispatch(
//   editNote(noteOne.note.id, { description: 'very nice car ferrari' })
// );

store.dispatch(setTitleFillters('B'));
