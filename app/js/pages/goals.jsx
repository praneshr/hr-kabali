import React, { PropTypes } from 'react';

export default class Goals extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getGoals(this.props.email)
  }

  render() {
    if (this.props.store.loader) {
      return false
    }
    const goals = this.props.store.goals
    const goalList = goals.map((goal) => {
      return <tr>
        <td>{goal.goal}</td>
        <td>{goal.startdate}</td>
        <td>{goal.enddate}</td>
        <td>{goal.reviewer}</td>
      </tr>
    })
    return (
      <div className="jobs">
      <div className="row">
        <div className="col-sm-6">
          <h1 className="page-title">{this.props.email ? `${this.props.email}'s Goals` : 'Goals'}</h1>
        </div>
        <div className={this.props.email === undefined ? 'col-sm-6 primary-action' : 'col-sm-12 primary-action'}>
        {
          this.props.email === undefined &&
          <a href="goals/create">
            <button>Create a Goal</button>
          </a>
        }
        </div>
      </div>
        <table>
          <thead>
            <tr>
              <th>Goal</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reviewer</th>
            </tr>
          </thead>
          <tbody>
            {goalList}
          </tbody>
        </table>
      </div>
    );
  }
}
