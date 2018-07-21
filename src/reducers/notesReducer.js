import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../action/types';

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case REMOVE_NOTE:
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case EDIT_NOTE:
      console.log(action.id, action.updates);
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

export default notesReducer;
