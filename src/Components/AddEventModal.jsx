import React, { Component } from 'react';
import moment from 'moment';

import { Modal, Input, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export class AddEventModal extends Component {
  state = { title: "" }

  handleTitle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { title } = this.state;
    const { visible, onOk, onCancel, eventStart, eventEnd, onTimeChange } = this.props;

    return (
      <Modal
        visible={visible}
        onOk={() => onOk(title)}
        onCancel={onCancel}
      >
        <div>
          <Input
            type="text"
            placeholder="Add Title"
            value={title}
            style={{ marginTop: 25, marginBottom: 15 }}
            size="large"
            autoFocus={true}
            onChange={this.handleTitle}
            name="title"
          />
          <RangePicker
            value={[moment(eventStart), moment(eventEnd)]}
            onChange={onTimeChange}
            showTime={{
              format: 'HH:mm',
              hourStep: 1,
              minuteStep: 15,
              defaultValue: [moment(eventStart), moment(eventEnd)],
            }}
            format="MMM Do, YYYY hh:mm a"
            style={{ width: "100%" }}
          />
        </div>
      </Modal>
    )
  }
}

export default AddEventModal
