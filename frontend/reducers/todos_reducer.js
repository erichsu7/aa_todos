import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      // map by id
     return action.todos.reduce((newState, todo) => (
        Object.assign(newState, { [todo.id]: todo })
      ), {});
    case RECEIVE_TODO:
      return Object.assign({}, state, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      var nextState = Object.assign({}, state);
      delete nextState[action.todoId];
      return nextState;
    default:
      return state;
  }
}

export default todosReducer;
