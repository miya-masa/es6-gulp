import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TodoStore from '../store/TodoStore';
import TodoContents from './TodoContents.jsx';

export default class Todo extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAllTodos()
    };
  }

  componentDidMount() {
    TodoStore.addListener(this._onChange.bind(this));
  }

  componentWillUnMount() {
    TodoStore.removeListener(this._onChange.bind(this));
  }

  _onChange() {
    console.log(TodoStore.getAllTodos());
    this.setState({
      todos: TodoStore.getAllTodos()
    });
  }

  render() {
    return (
      <div className="container">
        <AppBar title="Todoリスト" showMenuIconButton={false} />
        <TodoContents todos={this.state.todos}/>
      </div>
      );
  }
}
