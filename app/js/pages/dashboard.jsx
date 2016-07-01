import React, { PropTypes } from 'react';
import _ from "lodash"

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (_.isEmpty(this.props.store.user))
      return false
    const firstName = this.props.store.user.name.givenName
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 banner">
              {`Hello ${firstName}!`}
            </div>
          </div>
          <div className="row section-selector">
            <div className="col-lg-3 col-md-6 col-md-12">
              <a href="goals">
                <div className="selections goals">
                  <div className="img">
                    <img src="/img/goals.svg" alt=""/>
                  </div>
                </div>
              </a>
              <div className="title">
                Goals
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-12">
              <div className="selections feedbacks">
              <div className="img">
                <img src="/img/feedback.svg" alt=""/>
              </div>
              </div>
              <div className="title">
                Feedback
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-12">
              <div className="selections mentoring">
                <a href="reviewee">
                  <div className="img">
                    <img src="/img/reviewee.svg" alt=""/>
                  </div>
                </a>
              </div>
              <div className="title">
                Reviewees
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-12">
              <div className="selections self-assessment">
                <a href="mentee">
                  <div className="img">
                    <img src="/img/mentee.svg" alt=""/>
                  </div>
                </a>
              </div>
              <div className="title">
                Mentees
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
};
