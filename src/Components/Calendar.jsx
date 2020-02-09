import React, { Component } from 'react'
import WeekView from './WeekView/WeekView'

const events = [
    {
        "id": "15807582000001580761800000",
        "title": "",
        "start": 1580758200000,
        "end": 1580761800000,
        "startWeek": 6,
        "endWeek": 6
    }
]

class Calendar extends Component {
    state = {
        events: events
    }

    render() {
        return (
            <div>
                Calendar
                <WeekView />
            </div>
        )
    }
}

export default Calendar
