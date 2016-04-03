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

  addListner(callback) {
    super.addListener(CHANGE, callback);
  }

  removeListner(callback) {
    super.removeListner(CHANGE, callback);
  }

  handleViewAction(payload) {
    switch (payload.action.actionType) {
      case TodoConstants.CREATE:
        this.createTodo(payload.action.todo);
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

  createTodo(todo) {
    console.log('created');
    this.todos.push(todo);
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
