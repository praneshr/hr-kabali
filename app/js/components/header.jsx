import React, {PropTypes} from 'react';
import _ from 'lodash'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    window.location.href = '/logout'
  }

  render() {
    if (_.isEmpty(this.props.store.user)) {
      return false
    }
    const userImage = this.props.store.user.photos[0].value
    return (
      <div className="header">
        <a href="/">
          <span className="logo">
            <img src="/img/logo.png" alt=""/>
          </span>
          <span className="logo-tag">
            iPerf
          </span>
        </a>
        <span className="profile">
          <span className="pro-pic">
            <img src={userImage} alt=""/>
          </span>
            <span className="pro-name" onClick={this.logout}>
            {this.props.store.user.displayName}
            </span>
        </span>
      </div>
    );
  }
}
Header.propTypes = {
};
