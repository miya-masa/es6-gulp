import Dispatcher from './Dispatcher';
import TodoConstants from './TodoConstants';

class TodoActions {

  createTodo(todo, limitDate) {
    Dispatcher.handleViewAction({
      actionType: TodoConstants.CREATE,
      todo,
      limitDate
    });
  }

  removeTodo(todoId) {
    Dispatcher.handleViewAction({
      actionType: TodoConstants.REMOVE,
      todoId
    });
  }

  completeTodo(todoId, complete) {
    Dispatcher.handleViewAction({
      actionType: TodoConstants.COMPLETE,
      todoId,
      complete
    });
  }

}
export default new TodoActions();
