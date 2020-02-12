import React from 'react';
import './weekView.scss'

import { Col } from 'antd';
import { isTodaysDate, isSelectedDate } from '../utils'

export function TimeSlot({ dateStamp, time, startDate, openAddEventModal }) {
  return (
    <Col
      key={dateStamp}
      className={`time-slots ${isTodaysDate(dateStamp) ? "lightHighlighter" : isSelectedDate(dateStamp, startDate) ? "selectedDate" : ""}`}
      span={3}
      onClick={() => openAddEventModal(dateStamp, time)}
    />
  )
}

export default TimeSlot