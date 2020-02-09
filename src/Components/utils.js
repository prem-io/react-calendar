import moment from 'moment';

export const getAllDaysInTheWeek = (currentDate = moment()) => {
  const weekStart = currentDate.clone().startOf('week');

  const days = Array.from(Array(7))
    .map((day, index) => index)
    .map(day =>
      moment(weekStart).add(day, 'days').set('minutes', 0).set('seconds', 0)
    )
    .map(momentObj => ({
      date: momentObj.date(),
      dateStamp: +momentObj,
      weekDayName: momentObj.format('ddd'),
    }));

  return days;
};

// Hours in a day (24hr - format)
export const times = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

// check if dateStamp is today's date and return boolean

/**
 * dateStamp.diff(today) --> return difference b/w two dates
 * moment.duration(dateStamp.diff(today))) --> returns duration b/w two dates in millisecond
 * moment.duration(dateStamp.diff(today)).days()) --> returns number of days 
*/

export const isTodaysDate = dateStamp => {
  const today = moment(); // moment object
  dateStamp = moment(dateStamp); // convert dateStamp --> moment object

  return (
    moment.duration(dateStamp.diff(today)).days() === 0 &&
    today.day() === dateStamp.day()
  );
};