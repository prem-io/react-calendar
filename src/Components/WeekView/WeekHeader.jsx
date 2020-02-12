import React from 'react';
import './weekView.scss';

import { Row, Col } from 'antd';
import { isTodaysDate, isSelectedDate } from '../utils';

export function WeekHeader({ weekDays, startDate }) {
  return (
    <Row type="flex">
      <Col span={3} />
      {weekDays.map(day => (
        <Col
          className={`col weekDays ${isTodaysDate(day.dateStamp) ? "lightHighlighter" : isSelectedDate(day.dateStamp, startDate) ? "selectedDate" : ""}`}
          key={day.dateStamp}
          span={3}
        >
          <p className="weekDayName">{day.weekDayName}</p>
          <p className="weekDates">{day.date}</p>
        </Col>
      ))}

    </Row>
  )
}

export default WeekHeader
