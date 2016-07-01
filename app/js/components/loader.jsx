import React, {PropTypes} from 'react';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cs-loader">
        <div className="cs-loader-inner">
          <label>	●</label>
          <label>	●</label>
          <label>	●</label>
          <label>	●</label>
          <label>	●</label>
          <label>	●</label>
        </div>
      </div>
    );
  }
}
