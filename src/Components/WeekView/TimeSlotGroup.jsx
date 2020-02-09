import React from 'react';
import './weekView.scss'

import moment from 'moment';
import { Row, Col } from 'antd';
import TimeSlot from './TimeSlot';

export function TimeSlotGroup({ children, time, weekDays, openAddEventModal }) {
  const formatedTime = moment().set('hours', time).format('h a');

  return (
    <Row type="flex" key={time + formatedTime} className="row">
      <Col span={3} className="timeCol">
        <span className="timeString">
          {formatedTime}
        </span>
      </Col>
      {weekDays.map(day => (
        <TimeSlot
          key={day.dateStamp}
          dateStamp={day.dateStamp}
          time={time}
          openAddEventModal={openAddEventModal}
        />
      ))}
      {/* Event Highlighter is the children */}
      {children}
    </Row>
  )
}

export default TimeSlotGroup
