import moment from 'moment';

export default (notes, { title, startDate, endDate }) => {
  return notes.filter(note => {
    const createdAtMoment = moment(notes.created_at);
    const startDateMatch = startDate
      ? startDate.isSameOrBefore(createdAtMoment, 'day')
      : true;
    const endDateMatch = endDate
      ? endDate.isSameOrAfter(createdAtMoment, 'day')
      : true;
    const textMatch = note.title.toLowerCase().includes(title.toLowerCase());
    console.log(textMatch);
    return startDateMatch && endDateMatch && textMatch;
  });
};
