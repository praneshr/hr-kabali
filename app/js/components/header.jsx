import React, {PropTypes} from 'react';
import _ from 'lodash'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (_.isEmpty(this.props.store.user)) {
      return false
    }
    const userImage = this.props.store.user.photos[0].value
    return (
      <div className="header">
        Indix
        <span className="profile">
          <span className="pro-pic">
            <img src={userImage} alt=""/>
          </span>
          <span className="pro-name">
            {this.props.store.user.displayName}
          </span>
        </span>
      </div>
    );
  }
}
Header.propTypes = {
};
