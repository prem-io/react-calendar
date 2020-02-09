import React, { Component } from 'react'
import './weekView.scss';

import moment from 'moment';

import { getAllDaysInTheWeek, times } from "../utils"
import WeekHeader from './WeekHeader';
import TimeSlotGroup from './TimeSlotGroup';
import CalendarHeader from './CalendarHeader';

class WeekView extends Component {
  state = {
    startDate: +moment(), // getTime in seconds
    weekDays: getAllDaysInTheWeek(),
    showAddEventModal: false,
    eventStart: null,
    eventEnd: null,
  };

  goToToday = () => {
    this.setState({
      startDate: +moment(),
      weekDays: getAllDaysInTheWeek(),
    });
  };

  goToPreviousWeek = () => {
    const dateBefore7Days = moment(this.state.startDate).subtract(7, 'days');
    this.setState({
      startDate: +dateBefore7Days,
      weekDays: getAllDaysInTheWeek(dateBefore7Days),
    });
  };

  goToNextWeek = () => {
    const dateAfter7Days = moment(this.state.startDate).add(7, 'days');
    this.setState({
      startDate: +dateAfter7Days,
      weekDays: getAllDaysInTheWeek(dateAfter7Days),
    });
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
        <CalendarHeader
          startDate={startDate}
          goToToday={this.goToToday}
          goToPreviousWeek={this.goToPreviousWeek}
          goToNextWeek={this.goToNextWeek}
        />

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
