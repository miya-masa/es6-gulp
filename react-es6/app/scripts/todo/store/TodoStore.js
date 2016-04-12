import { EventEmitter } from 'events';
import Dispatcher from '../app/Dispatcher';
import TodoConstants from '../app/TodoConstants';

const CHANGE = Symbol();

class TodoStore extends EventEmitter {

  constructor() {
    super();
    this.dispatcherToken = Dispatcher
      .register(payload => this.handleViewAction(payload));
    this.todos = [];
  }

  fireEvent() {
    this.emit(CHANGE);
  }

  addListener(callback) {
    super.addListener(CHANGE, callback);
  }

  removeListener(callback) {
    super.removeListner(CHANGE, callback);
  }

  handleViewAction(payload) {
    switch (payload.action.actionType) {
      case TodoConstants.CREATE:
        this.createTodo(
          payload.action.todo,
          payload.action.limitDate,
          payload.action.complete);
        this.fireEvent();
        break;
      case TodoConstants.COMPLETE:
        this.completeTodo(payload.action.todoId, payload.action.complete);
        this.fireEvent();
        break;
      case TodoConstants.REMOVE:
        this.removeTodo(payload.action.todoId);
        this.fireEvent();
        break;
      default:
        break;
    }
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter(e => e.id !== todoId);
  }

  completeTodo(todoId, complete) {
    this.todos.filter(e => e.id === todoId).forEach(e => e.complete = complete);
  }

  createTodo(todo, limitDate, complete = false) {
    const id = (Number(new Date()) +
    Math.floor(Math.random() * 999999)).toString(36);

    this.todos.push({
      id,
      todo,
      limitDate,
      complete
    });
  }

  getAllTodos() {
    return this.todos.filter(() => true);
  }
}
export default new TodoStore();
