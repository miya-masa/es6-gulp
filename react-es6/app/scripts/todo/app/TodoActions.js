import Dispatcher from './Dispatcher';
import TodoConstants from './TodoConstants';

class TodoActions {

  createTodo(todo) {
    Dispatcher.handleViewAction({
      actionType: TodoConstants.CREATE,
      todo: todo
    });
  }

}
export default new TodoActions();
