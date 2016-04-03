import React from 'react';
import TodoDialog from './TodoDialog.jsx';
import TodoGridTable from './TodoGridTable.jsx';
import TodoStore from '../store/TodoStore';

export default class TodoContents extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAllTodos()
    }
  }

  componentDidMount() {
    TodoStore.addListner((...arg) => this.onChangeTodoStore(...arg));
  }

  onChangeTodoStore() {
    this.setState({
      todos: TodoStore.getAllTodos()
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="row">
          <TodoDialog />
          <div>
            <TodoGridTable todos={this.state.todos}/>
          </div>
        </div>
      );
  }
}
