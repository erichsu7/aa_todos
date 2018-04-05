import { connect } from "react-redux";
import StepList from "./step_list";
import { stepsForTodoId } from "../../reducers/selectors";
import { receiveStep } from "../../actions/step_actions";

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsForTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
