import React from 'react';

export default class TodoRow extends React.Component {

  onChangeComplete() {
    console.log(this);
  }
  componentDidMount() {
    console.log(this.completed);
    console.log('Did mount');
    jQuery.material.checkbox(this.completed);
  }

  render() {
    const checked = this.props.data.complete ? 'checked' : '';
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.todo}</td>
        <td>{this.props.data.limitDate}</td>
        <td className="form-group">
            <div className="checkbox">
                <label>
                  <input ref={e => this.completed = e} type="checkbox" checked={checked} onChange={() => this.onChangeComplete()} />
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
