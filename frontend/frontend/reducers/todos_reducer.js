import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      return Object.assign({}, state, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      var nextState = Object.assign({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
}

export default todosReducer;
