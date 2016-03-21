import { Collection } from 'backbone';
import Todo from './Todo'
import LocalStorage from 'backbone.localstorage'
import sequence from '../app/Sequence';
import channel from '../app/Channel'
import Rx from 'rx-lite'

const TodoList = Collection.extend({
  model: Todo,
  localStorage: new LocalStorage('todo'),
  initialize() {
    channel.on('todo:create', this.createTodo, this);
    channel.on('todo:remove', this.removeTodo, this);
    channel.on('todo:complete', this.completeTodo, this);
  },
  createTodo(todo) {
    this.create(todo);
  },

  removeTodo(modelId) {
    Rx.Observable.fromArray(this.models)
      .filter(e => e.id == modelId)
      .flatMap(e => Rx.Observable.fromPromise(e.destroy()))
      .subscribe(e => this.remove(e));
  },

  completeTodo(modelId) {
    Rx.Observable.fromArray(this.models)
      .filter(e => e.id == modelId)
      .subscribe(e => {
        e.toggleComplete();
        e.save();
      });
  }
});
export default new TodoList();
