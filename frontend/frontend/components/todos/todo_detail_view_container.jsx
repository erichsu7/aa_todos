import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";
import { receiveSteps } from "../../actions/step_actions";

const mapDispatchToProps = (dispatch) => ({
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
