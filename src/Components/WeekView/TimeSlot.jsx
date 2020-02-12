import React from 'react';
import './weekView.scss'

import { Col } from 'antd';
import { isTodaysDate } from '../utils'

export function TimeSlot({ dateStamp, time, openAddEventModal }) {
  return (
    <Col
      key={dateStamp}
      className={`time-slots ${isTodaysDate(dateStamp) ? "lightHighlighter" : ""}`}
      span={3}
      onClick={() => openAddEventModal(dateStamp, time)}
    />
  )
}

export default TimeSlot