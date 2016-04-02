import React from 'react';
import TodoDialog from './TodoDialog.jsx';
import TodoGridTable from './TodoGridTable.jsx';

export default class TodoContents extends React.Component {

  render() {
    return (
        <div className="row">
          <TodoDialog />
          <div>
          <TodoGridTable />
          </div>
        </div>
      );
  }
}
