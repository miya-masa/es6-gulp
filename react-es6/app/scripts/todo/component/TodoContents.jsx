import React from 'react';
import TodoDialog from './TodoDialog.jsx';
import TodoGridTable from './TodoGridTable.jsx';

export default class TodoContents extends React.Component {

  render() {
    return (
      <div>
            <TodoDialog />
          <div>
            <TodoGridTable todos={this.props.todos}
      onChangeComplete={this.props.onChangeComplete}
      onTouchRemove={this.props.onTouchRemove}/>
          </div>
        </div>
      );
  }
}
