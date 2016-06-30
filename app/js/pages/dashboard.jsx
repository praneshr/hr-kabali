import React, { PropTypes } from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                <div className="selections goals"></div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-md-12">
              <div className="selections feedbacks"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-12">
              <div className="selections mentoring"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-12">
              <div className="selections self-assessment"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
};
