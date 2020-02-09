import React, { Component } from 'react';

import { events, generateUniqueId, addEvent } from './utils';
import WeekView from './WeekView/WeekView';

class Calendar extends Component {
  state = {
    events: events
  }

  addNewEvent = event => {
    event = {
      ...event,
      id: generateUniqueId(event),
    };
    this.setState(prevState => ({
      events: addEvent(prevState.events, event),
    }));
  };

  render() {
    const { events } = this.state
    console.log(events)

    return (
      <div>
        <WeekView
          events={events}
          onNewEvent={this.addNewEvent}
        />
      </div>
    )
  }
}

export default Calendar
