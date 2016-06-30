import React, { PropTypes } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

export default class CreateGoal extends React.Component {
  constructor(props) {
    super(props)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.state = {
      startDate: moment(),
      endDate: moment().add(2, 'd'),
    }
  }

  handleStartDateChange(startDate) {
    this.setState({
      startDate,
    })
  }

  handleEndDateChange(endDate) {
    this.setState({
      endDate,
    })
  }

  render() {
    return (
      <div className="create-goal">
        Create Goal
        Start Date
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartDateChange} />

        End Date
        Start Date
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleEndDateChange} />
        <textarea name="goal" id="goal-input" cols="30" rows="10">

        </textarea>
        Reviewer
        <select name="" id="">
        </select>
        Mentor
        <select name="" id="">
        </select>
        <button>Add</button>
      </div>
    );
  }
}
