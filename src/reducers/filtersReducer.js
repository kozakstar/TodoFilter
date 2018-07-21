import moment from 'moment';

import {
  SET_TITLE_FILTER,
  SET_START_DATE,
  SET_END_DATE
} from '../action/types';
const fillterDefault = {
  title: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
const filltersReducer = (state = fillterDefault, action) => {
  switch (action.type) {
    case SET_TITLE_FILTER:
      return { ...state, title: action.title };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
export default filltersReducer;
