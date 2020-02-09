import React from 'react';
import './weekView.scss'

import { Col } from 'antd';
import { isTodaysDate } from '../utils'

export function TimeSlot({ dateStamp, time }) {
  return (
    <Col
      key={dateStamp}
      className={`col weekDays ${isTodaysDate(dateStamp) ? "lightHighlighter" : ""}`}
      span={3}
    // onClick={() => props.openAddEventModal(dateStamp, time)}
    />
  )
}

export default TimeSlot