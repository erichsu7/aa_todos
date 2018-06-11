import React from "react";
import StepForm from "./step_form";
import StepListItemContainer from "./step_list_item_container";

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo_id, createStep } = this.props;
    return (
      <div>
        <ul>
          {this.props.steps.map((step) => <StepListItemContainer step={step}/>)}
        </ul>
        <StepForm todoId={todo_id} createStep={createStep} />
      </div>
    )
  }

}

export default StepList;
