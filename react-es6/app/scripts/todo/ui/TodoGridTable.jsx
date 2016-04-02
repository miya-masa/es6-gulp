import React from 'react';
import TodoRow from './TodoRow.jsx';

export default class TodoGridTable extends React.Component {

  render() {
    return (
       <div id="todo-grid-table">
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
              <TodoRow />
          </table>
       </div>
      );
  }
}
