import { ItemView } from 'backbone.marionette';
import dialog from './templates/dialog.hbs';
import sequence from '../app/Sequence';
import Channel from '../app/Channel';
import Todo from '../model/Todo';
export default ItemView.extend({
  template: dialog,
  ui: {
    dialogTodo: '#create-todo-dialog',
    errorMessage: '.error-message',
    btnOk: '.btn-ok',
    btnCancel: '.btn-cancel',
    btnClose: '.btn-close',
    btnSaveTodo: '#btn-save-todo',
    inputTodo: '#input-todo',
    inputLimitDate: '#input-limit-date'
  },
  events: {
    'click @ui.btnOk': 'onClickBtnOk',
    'click @ui.btnCancel': 'onClickBtnCancel',
    'click @ui.btnClose': 'onClickBtnCancel'
  },
  onClickBtnOk() {
    let todo = new Todo({
      todo: this.ui.inputTodo.val(),
      limitDate: this.ui.inputLimitDate.val()
    });
    if (!todo.isValid()) {
      this.ui.errorMessage.html(todo.validationError);
      return false;
    }
    Channel.trigger('todo:create', todo);
    this.ui.dialogTodo.modal('hide');
    this._clearTodo();
  },
  onClickBtnCancel() {
    this._clearTodo();
  },
  _clearTodo() {
    this.ui.inputTodo.val('');
    this.ui.inputLimitDate.val('');
    this.ui.errorMessage.empty();
  }
});
