import React, { Component } from 'react'
import './weekView.scss';

import moment from 'moment';
import { generateWeekViewCoordinates } from '../utils'

const eventHighlighter = {
  position: 'absolute',
  backgroundColor: '#453BB1',
  border: '1px solid #453BB1',
  borderRadius: '4px',
  color: 'white',
  padding: '2px 4px',
  fontSize: '12px',
  zIndex: 1,
  cursor: 'pointer',
};

export class EventHighlighter extends Component {
  render() {
    const { event, startDate } = this.props

    return (
      <div
        style={{
          ...generateWeekViewCoordinates(event, startDate),
          ...eventHighlighter
        }}
      >
        {event.title} <br />
        <span style={{ fontSize: 10 }}>
          {moment(event.start).format('hh:mm a')}
          {' '}
          -
            {' '}
          {moment(event.end).format('hh:mm a')}
        </span>
      </div>
    )
  }
}

export default EventHighlighter
