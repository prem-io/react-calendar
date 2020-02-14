import React from 'react';
import './weekView.scss'

import { Col } from 'antd';
import { isTodaysDate, isSelectedDate } from '../utils'

export function TimeSlot({ dateStamp, time, selectedDate, openAddEventModal }) {
  return (
    <Col
      key={dateStamp}
      className={`time-slots
      ${isTodaysDate(dateStamp) ? "lightHighlighter" : isSelectedDate(dateStamp, selectedDate) ? "selectedDate" : ""}
      ${time === 23 ? "border-btm" : ""}
      `}
      span={3}
      onClick={() => openAddEventModal(dateStamp, time)}
    />
  )
}

export default TimeSlot