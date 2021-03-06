import React from 'react'
import './weekView.scss'

import moment from 'moment';
import { Row, Col, Button, Icon, Tooltip } from 'antd';
import { DatePicker } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

export function CalendarHeader({ startDate, goToToday, goToPreviousWeek, goToNextWeek }) {
  const formatedDate = moment(startDate).format('MMM YYYY');
  return (
    <Row type="flex" className="calendar-header">
      <Col span={3} offset={3} className="appTitle">
        <Icon type="calendar" className="spacify" />Calendar
      </Col>

      <Col span={3}>
        <DatePicker
          onChange={onChange}
          defaultValue={moment(startDate)}
          format={'dddd, MMM D'}
          allowClear={false}
          showToday={true}
          suffixIcon={<Icon type="caret-down" />}
        />
      </Col>

      <Col span={2} offset={7}><Button icon="plus">Add Event</Button></Col>

      <Col span={2} className="alignRight">
        <Tooltip placement="topLeft" title={moment().format('dddd, MMM D')}>
          <Button onClick={goToToday}>Today</Button>
        </Tooltip>
      </Col>

      <Col span={2} className="weekButtons">
        <Button icon="left" onClick={goToPreviousWeek} className="spacify" />
        <Button icon="right" onClick={goToNextWeek} />
      </Col>

      <Col span={2} className="formated-date">
        {formatedDate}
      </Col>
    </Row>
  )
}

export default CalendarHeader