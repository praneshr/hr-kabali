import React, {PropTypes} from 'react';

export default class Mentee extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.getMentee()
  }

  render() {
    if(this.props.store.mentee === undefined)
      return false
    const menteeList = this.props.store.mentee.map((mentee) => {
      return <tr>
        <td>{mentee.username}</td>
      </tr>
    })
    return (
      <div className="mentee">
      <div className="row">
        <div className="col-sm-6">
          <h1 className="page-title">Mentee</h1>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>
                Mentee
              </th>
            </tr>
          </thead>
          <tbody>
            {menteeList}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}
Mentee.propTypes = {
};
