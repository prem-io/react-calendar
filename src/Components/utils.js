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

// All the hours in the day
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