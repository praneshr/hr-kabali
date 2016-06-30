import React, { PropTypes } from 'react';

export default class Goals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jobs">
        Goals
        <a href="goals/create">
          <button>Create a Goal</button>
        </a>
      </div>
    );
  }
}
