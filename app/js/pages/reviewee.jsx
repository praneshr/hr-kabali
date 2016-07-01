import React, {PropTypes} from 'react';

export default class Reviewee extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.getReviewee()
  }

  render() {
    if(!this.props.store.reviewee)
      return false
    const revieweeEmails = this.props.store.reviewee.map((reviewee) => {
      return reviewee.username
    }).sort()

    const reviewee = []
    var current = null;
    var cnt = 0;
    for (var i = 0; i < revieweeEmails.length; i++) {
      if (revieweeEmails[i] != current) {
          if (cnt > 0) {
              reviewee.push({ username: current, count: cnt})
          }
          current = revieweeEmails[i];
          cnt = 1;
      } else {
          cnt++;
      }
    }
    if (cnt > 0) {
        reviewee.push({ username: current, count: cnt})
    }
    const revieweeList = reviewee.map((obj) => {
      return <tr>
        <td><a href={`goals/${obj.username}`}>{obj.username}</a></td>
        <td>{obj.count}</td>
      </tr>
    })
    return (
      <div className="reviewee">
      <div className="row">
        <div className="col-sm-6">
          <h1 className="page-title">Reviewee</h1>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Reviewee Name</th>
              <th>No. of Goals</th>
            </tr>
          </thead>
          <tbody>
            {revieweeList}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

Reviewee.propTypes = {
};
