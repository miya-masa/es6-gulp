import React from 'react';

export default class TodoRow extends React.Component {

  onChangeComplete() {
    console.log(this);
  }
  componentDidMount() {
    console.log(this.completed);
    console.log('Did mount');
  }

  render() {
    const checked = this.props.todo.complete ? 'checked' : '';
    return (
      <tr>
        <td>{this.props.todo.id}</td>
        <td>{this.props.todo.todo}</td>
        <td>{this.props.todo.limitDate}</td>
        <td className="form-group">
            <div className="checkbox">
                <label>
                </label>
            </div>
        </td>
        <td className="btn-group-sm">
            <button className="btn-remove btn btn-danger btn-fab"><i className="material-icons">remove</i>
                <div className="ripple-container"></div>
            </button>
        </td>
      </tr>
      );
  }
}
