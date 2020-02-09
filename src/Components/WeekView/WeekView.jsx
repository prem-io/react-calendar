import React, { Component } from 'react'
import './weekView.scss';

import moment from 'moment';

import { getAllDaysInTheWeek, times } from "../utils"
import WeekHeader from './WeekHeader';
import TimeSlotGroup from './TimeSlotGroup';

class WeekView extends Component {
  state = {
    startDate: +moment(), // getTime in seconds
    weekDays: getAllDaysInTheWeek(),
    showAddEventModal: false,
    eventStart: null,
    eventEnd: null,
  };

  render() {

    const {
      startDate,
      weekDays,
      showAddEventModal,
      eventStart,
      eventEnd,
    } = this.state;

    const { events } = this.props

    return (
      <div className="container">
        <WeekHeader weekDays={weekDays} />
        {times.map(time => (
          <TimeSlotGroup
            key={time}
            time={time}
            weekDays={weekDays}
            events={events[time]}
          >
            {/* Event Highlighter */}
          </TimeSlotGroup>
        ))}
      </div>
    )
  }
}

export default WeekView
