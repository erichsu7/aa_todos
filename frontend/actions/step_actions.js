import * as StepAPIUtil from "../util/step_api_util";
import { receiveErrors, clearErrors } from "./error_actions";
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = (stepId) => ({
  type: REMOVE_STEP,
  stepId
});

export const fetchSteps = () => dispatch => (
  StepAPIUtil.fetchSteps().then(steps => dispatch(receiveSteps(steps)))
);

export const createStep = step => dispatch => (
  StepAPIUtil.createStep(step).then(
    savedStep => {
      dispatch(receiveStep(savedStep));
      dispatch(clearErrors());
    },
    response => dispatch(receiveErrors(response.responseJSON))
  )
);

export const updateStep = step => dispatch => (
  StepAPIUtil.updateStep(step).then(
    savedStep => {
      dispatch(receiveStep(savedStep));
      dispatch(clearErrors());
    },
    response => dispatch(receiveErrors(response.responseJSON))
  )
);

export const deleteStep = step => dispatch => (
  StepAPIUtil.deleteStep(step).then(
    stepId => {
      dispatch(removeStep(stepId));
      dispatch(clearErrors());
    },
    response => dispatch(receiveErrors(response.responseJSON))
  )
);
