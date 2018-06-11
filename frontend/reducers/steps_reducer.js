import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS:
      // map by id
      return actions.steps.reduce((newState, step) => (
        return Object.assign(newState, { [step.id]: id })
      ), {});
    case RECEIVE_STEP:
      return Object.assign({}, state, { [action.step.id]: action.step });
    case REMOVE_STEP:
      const newState = Object.assign({}, state);
      delete newState[action.stepId];
      return newState;
    default:
      return state;
  }
}

export default stepsReducer;
