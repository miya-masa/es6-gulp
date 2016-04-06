import React from 'react';
import TodoRow from './TodoRow.jsx';
import TodoStore from '../store/TodoStore';

export default class TodoGridTable extends React.Component {

  render() {
    const rows = this.props.todos.map(e => <TodoRow key={e.id} todo = {e} />);
    return (
      <div>
          <table className="table table-striped table-hover">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Todo</th>
                      <th>limitDate</th>
                      <th>complete</th>
                      <th>delete</th>
                  </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
          </table>
       </div>
      );
  }
}
