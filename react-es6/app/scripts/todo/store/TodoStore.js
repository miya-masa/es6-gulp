import { EventEmitter } from 'events';
import Dispatcher from '../app/Dispatcher';
import TodoConstants from '../app/TodoConstants';

const CHANGE = Symbol();

class TodoStore extends EventEmitter {

  constructor() {
    super();
    this.dispatcherToken = Dispatcher.register(payload => this.handleViewAction(payload));
    this.todos = [
      {
        id: 'id',
        todo: 'todo',
        limitDate: '2000/1/1',
        complete: true
      }
    ];
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
        this.createTodo(payload.action.todo, payload.action.limitDate, payload.action.complete);
        this.fireEvent();
        break;
      case TodoConstants.REMOVE:
        this.createTodo(payload.action.todo);
        this.fireEvent();
        break;
      default:
        break;
    }
  }

  createTodo(todo, limitDate, complete = false) {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    console.log('createTodo Store');

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

// const TodoStore = Collection.extend({
//   model: Todo,
//   localStorage: new LocalStorage('todo'),
//   initialize() {
//     channel.on('todo:create', this.create, this);
//     channel.on('todo:remove', this.removeTodo, this);
//     channel.on('todo:complete', this.completeTodo, this);
//   },
// 
//   removeTodo(modelId) {
//     Rx.Observable.fromArray(this.models)
//       .filter(e => e.id === modelId)
//       .flatMap(e => Rx.Observable.fromPromise(e.destroy()))
//       .subscribe(e => this.remove(e));
//   },
// 
//   completeTodo(modelId) {
//     Rx.Observable.fromArray(this.models)
//       .filter(e => e.id === modelId)
//       .subscribe(e => {
//         e.toggleComplete();
//         e.save();
//       });
//   }
// });
//  export default new TodoList();
