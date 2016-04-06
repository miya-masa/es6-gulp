import React from 'react';
import TodoDialog from './TodoDialog.jsx';
import TodoGridTable from './TodoGridTable.jsx';
import TodoStore from '../store/TodoStore';

export default class TodoContents extends React.Component {

  render() {
    return (
          <div>
            <TodoDialog />
          <div>
            <TodoGridTable todos={this.props.todos}/>
          </div>
        </div>
      );
  }
}
