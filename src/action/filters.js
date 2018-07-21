import { SET_TITLE_FILTER, SET_END_DATE, SET_START_DATE } from './types';
export const setTitleFillters = (title = '') => ({
  type: SET_TITLE_FILTER,
  title
});

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate
});

export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate
});
