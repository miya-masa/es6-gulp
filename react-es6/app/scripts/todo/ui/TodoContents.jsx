import React from 'react';
import TodoDialog from './TodoDialog.jsx';

export default class TodoContents extends React.Component {

  render() {
    return (
        <div className="row">
          <TodoDialog />
          <div>
              <div id="todo-grid-table">
              </div>
          </div>
        </div>
      );
  }
}
