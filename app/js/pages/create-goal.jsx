import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import _ from 'lodash'

export default class CreateGoal extends React.Component {
  constructor(props) {
    super(props)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.submitGoal = this.submitGoal.bind(this)
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

  componentDidMount() {
    this.props.actions.getAllUsers()
  }

  submitGoal(e) {
    const goal = {
      startDate: this.state.startDate.format('DD-MM-YYYY'),
      endDate: this.state.endDate.format('DD-MM-YYYY'),
      goal: ReactDOM.findDOMNode(this.refs.goalInput).value,
      reviewer: ReactDOM.findDOMNode(this.refs.reviewer).value,
      mentor: ReactDOM.findDOMNode(this.refs.mentor).value,
    }
    this.props.actions.submitGoal(goal)
  }

  render() {
    if(_.isEmpty(this.props.store.allUsers))
      return false
    const allUsers = this.props.store.allUsers
    const userlist = allUsers.map((user) => {
      return <option value={user.username}>{user.username}</option>
    })
    return (
      <div className="create-goal">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="page-title">Create Goal</h1>
          </div>
        </div>
        <div className="form">
          <div className="section">
            <label>Start Date</label>
            <span className="value">
              <DatePicker
                dateFormat="DD-MM-YYYY"
                minDate={moment()}
                selected={this.state.startDate}
                onChange={this.handleStartDateChange} />
            </span>
          </div>
          <div className="section">
            <label>End Date</label>
            <span className="value">
              <DatePicker
                dateFormat="DD-MM-YYYY"
                selected={this.state.endDate}
                minDate={moment()}
                onChange={this.handleEndDateChange} />
            </span>
          </div>
          <div className="section">
            <span className="value">
              <textarea name="goal" ref="goalInput" cols="30" rows="10" placeholder="Enter your goal..."/>
            </span>
          </div>
          <div className="section">
            <label>Reviewer</label>
            <span className="value">
              <select ref="reviewer">
                {userlist}
              </select>
            </span>
          </div>
          <div className="section">
            <label>Mentor</label>
            <span className="value">
              <select ref="mentor">
                {userlist}
              </select>
            </span>
          </div>
        </div>
        <button onClick={this.submitGoal}>Add</button>
      </div>
    );
  }
}
