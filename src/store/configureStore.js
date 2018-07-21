import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';
import filtersReducer from '../reducers/filtersReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
