import { LayoutView } from 'backbone.marionette';
import grid from './templates/grid-table.hbs';
import Rx from 'rx-lite';
import todoList from '../model/TodoList';
import TodoGridRows from './TodoGridRows';
import EmptyView from './EmptyView';
export default LayoutView.extend({
  template: grid,
  regions: {
    todoGridRows: '#todo-grid-rows'
  },
  onRender() {
    Rx.Observable.fromPromise(todoList.fetch())
      .map(e => new TodoGridRows({
        collection: todoList
      }))
      .subscribe(gridRows => {
        gridRows.render();
        // 一度空Viewを入れてから要素を書き換える
        this.getRegion('todoGridRows').show(new EmptyView()); this.getRegion('todoGridRows').$el.replaceWith(gridRows.el);
      });
  }
});
