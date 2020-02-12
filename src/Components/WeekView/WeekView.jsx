import React, { Component } from 'react'
import './weekView.scss';

import moment from 'moment';

import { getAllDaysInTheWeek, times } from "../utils"
import AddEventModal from '../AddEventModal';
import CalendarHeader from './CalendarHeader';
import WeekHeader from './WeekHeader';
import TimeSlotGroup from './TimeSlotGroup';
import EventHighlighter from './EventHighlighter';

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

  goToDate = (date) => {
    this.setState({
      startDate: +date,
      weekDays: getAllDaysInTheWeek(date),
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

  onCurrentEventTimeChange = dates => {
    this.setState({
      eventStart: +dates[0],
      eventEnd: +dates[1],
    });
  };

  openAddEventModal = (dateStamp, time) => {
    const start = moment(dateStamp).set('hour', time);
    const end = start.clone().add(1, 'hour');
    this.setState({
      showAddEventModal: true,
      eventStart: +start,
      eventEnd: +end,
    });
  };

  onOkAddEventModal = title => {
    this.props.onNewEvent({
      title,
      start: this.state.eventStart,
      end: this.state.eventEnd,
    });
    this.setState({
      showAddEventModal: false,
    });
  };

  onCloseAddEventModal = () => {
    this.setState({
      showAddEventModal: false,
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
        <AddEventModal
          visible={showAddEventModal}
          eventStart={eventStart}
          eventEnd={eventEnd}
          onTimeChange={this.onCurrentEventTimeChange}
          onOk={this.onOkAddEventModal}
          onCancel={this.onCloseAddEventModal}
        />

        <CalendarHeader
          startDate={startDate}
          goToToday={this.goToToday}
          goToPreviousWeek={this.goToPreviousWeek}
          goToNextWeek={this.goToNextWeek}
          goToDate={this.goToDate}
        />

        <WeekHeader weekDays={weekDays} startDate={startDate} />

        {times.map(time => (
          <TimeSlotGroup
            key={time}
            time={time}
            startDate={startDate}
            weekDays={weekDays}
            events={events[time]}
            openAddEventModal={this.openAddEventModal}
          >
            {events[time] && events[time].map(
              event =>
                event.startWeek <= moment(startDate).week() &&
                event.endWeek >= moment(startDate).week() &&
                <EventHighlighter
                  key={event.title + event.start + event.end}
                  event={event}
                  startDate={startDate}
                />
            )}
          </TimeSlotGroup>
        ))}
      </div>
    )
  }
}

export default WeekView
