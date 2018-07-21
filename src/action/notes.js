import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from './types';
import uuid from 'uuid';

export const addNote = ({
  title = '',
  description = '',
  created_at = 0
} = {}) => ({
  type: ADD_NOTE,
  note: {
    id: uuid(),
    description,
    title,
    created_at
  }
});
export const removeNote = ({ id } = {}) => ({
  type: REMOVE_NOTE,
  id
});

export const editNote = (id, updates) => {
  return {
    type: EDIT_NOTE,
    id,
    updates
  };
};
