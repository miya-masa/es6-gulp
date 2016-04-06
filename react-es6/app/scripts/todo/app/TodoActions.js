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

}
export default new TodoActions();
