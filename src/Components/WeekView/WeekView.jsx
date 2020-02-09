import React, { Component } from 'react'
import moment from 'moment';

import { getAllDaysInTheWeek, times } from "../utils"
import { container } from './styles';

class WeekView extends Component {
    state = {
        startDate: +moment(), // getTime in seconds
        weekDays: getAllDaysInTheWeek(),
        showAddEventModal: false,
        eventStart: null,
        eventEnd: null,
    };

    render() {
        const {
            startDate,
            weekDays,
            showAddEventModal,
            eventStart,
            eventEnd,
        } = this.state;

        return (
            <div style={container}>
                WeekView
            </div>
        )
    }
}

export default WeekView
