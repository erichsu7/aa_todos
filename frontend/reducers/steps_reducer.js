import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";

const initialState = {
  1: {
    id: 1,
    todo_id: 1,
    title: 'buy cleaning supplies',
    body: 'soap, sponge, etc.',
    done: true
  },
  2: {
    id: 2,
    todo_id: 1,
    title: 'hose down car',
    body: 'all four sides',
    done: false
  },
}

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS:
      return action.steps;
    case RECEIVE_STEP:
      return Object.assign({}, state, { [action.step.id]: action.step });
    case REMOVE_STEP:
      const newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
}

export default stepsReducer;
