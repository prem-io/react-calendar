import moment from 'moment';

export const events = {
  1: [
    {
      title: "W",
      start: 1581623100000,
      end: 1581628500000,
      id: "1581623100000W1581628500000",
      eventStartTime: "01:15 AM",
      eventEndTime: "02:45 AM",
      startWeek: 7,
      endWeek: 7
    },
    {
      title: "ADAD",
      start: 1581276600000,
      end: 1581280200000, id:
        "1581276600000ADAD1581280200000",
      startWeek: 7,
      endWeek: 7
    },
    {
      title: "avcaca",
      start: 1581363000000,
      end: 1581366600000,
      id: "1581363000000avcaca1581366600000",
      startWeek: 7,
      endWeek: 7
    }
  ],
  2: [
    {
      title: "cac",
      start: 1581280200000,
      end: 1581283800000,
      id: "1581280200000cac1581283800000",
      startWeek: 7,
      endWeek: 7
    }
  ],
  3: [
    {
      title: "Role Name",
      start: 1581456600000,
      end: 1581463800000,
      id: "1581456600000RoleName1581463800000",
      eventStartTime: "03:00 AM",
      eventEndTime: "05:00 AM",
      startWeek: 7,
      endWeek: 7,
    }
  ],
  13: [
    {
      id: "15807582000001580761800000",
      title: "Role Name",
      start: 1580758200000,
      end: 1580761800000,
      eventStartTime: "03:00 AM",
      eventEndTime: "05:00 AM",
      startWeek: 7,
      endWeek: 7
    }
  ]
}

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

export const getAllDaysInTheWeek = (selectedDate) => {
  const date = (selectedDate === undefined) ? moment() : selectedDate

  const weekStart = date.clone().startOf('week');

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

export const isSelectedDate = (dateStamp, selectedDate) => {
  selectedDate = moment(selectedDate)
  dateStamp = moment(dateStamp);

  return (moment.duration(dateStamp.diff(selectedDate)).days() === 0 && selectedDate.day() === dateStamp.day())

}

/** event -> { title, start, end } */

export const generateUniqueId = ({ title, start, end }) => {
  return (start + title + end).replace(/\s/g, '')
}

/**
 * allEvents (allEvents) --> object reference of all events
 * newEvent --> object of the new 
 * time --> represents hours in 1,2,3,...21,22,23
 * eventStartTime & eventEndTime --> time in hrs:mins
*/

export const addEvent = (allEvents, newEvent) => {
  const time = moment(newEvent.start).hours()

  const eventStartTime = moment(newEvent.start).format('hh:mm A')
  const eventEndTime = moment(newEvent.end).format('hh:mm A')

  const eventWithWeekInfo = {
    ...newEvent,
    eventStartTime: eventStartTime,
    eventEndTime: eventEndTime,
    startWeek: moment(newEvent.start).week(),
    endWeek: moment(newEvent.end).week(),
  };

  if (allEvents[time]) {
    allEvents[time].push(eventWithWeekInfo)
  } else {
    allEvents[time] = [eventWithWeekInfo]
  }

  return { ...allEvents }
}

/**
 * moment.duration() --> truncates the result to integer value
 * duration.asHours --> used to calculate the exacte diff hours b/w two times
 * start.minutes() --> returns mins present in the time
 */

export const generateWeekViewCoordinates = (event, startDate) => {
  const start = moment(event.start);
  const end = moment(event.end);
  const duration = moment.duration(end.diff(start));
  const weekStart = moment(startDate);

  const eventStartTime = moment(event.start).format('hh:mm A')
  const eventEndTime = moment(event.end).format('hh:mm A')

  const startT = new Date('01.02.2020 ' + eventStartTime).getTime() / 1000;
  const endT = new Date('01.02.2020 ' + eventEndTime).getTime() / 1000;

  // time diff in minutes
  var result = Math.abs(endT - startT) / 3600;

  console.log("startTime", eventStartTime)
  console.log("endTime", eventEndTime)
  console.log("diff", result)

  // Calculating Highlighter width, height, position
  let width, height, top, left;

  // Calculating Top
  // console.log(start.minutes())
  top = start.minutes() === 15 ? '25' : start.minutes() === 30 ? '50' : start.minutes() === 45 ? '75' : '0';

  // Calculating height
  // const timeFactor = duration.asHours() + duration.minutes() / 60;
  // height = timeFactor * 95;

  height = result * 100;

  if (weekStart.week() === start.week()) {
    const weekDay = start.weekday();
    left = (weekDay + 1) * 12.5;
  }

  if (weekStart.week() === start.week() && weekStart.week() === end.week()) {
    const daysDiff = duration.days();
    // width = (daysDiff + 1) * 12.5 - 2;
    width = (daysDiff + 1) * 12.5;
  }

  if (weekStart.week() > start.week() && weekStart.week() === end.week()) {
    const daysDiff = moment
      .duration(
        end.diff(
          weekStart
            .startOf('week')
            .set('hours', start.hours())
            .set('minutes', start.minutes())
        )
      )
      .days();
    // width = (daysDiff + 1) * 12.5 - 2;
    width = (daysDiff + 1) * 12.5;
  }

  if (weekStart.week() > start.week()) {
    left = 12.5;
  }

  if (weekStart.week() < end.week()) {
    width = 100 - left;
  }

  return {
    top: top + '%',
    left: left + '%',
    height: height + '%',
    width: width + '%',
  };
}

