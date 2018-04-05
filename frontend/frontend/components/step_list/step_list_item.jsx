import React from "react";

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStepDone = this.toggleStepDone.bind(this);
  }

  toggleStepDone(event) {
    const { step } = this.props;
    const newStep = Object.assign({}, step, { done: !step.done });
    this.props.receiveStep(newStep);
  }

  render() {
    const { step } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={step.done}
          onClick={this.toggleStepDone}/>
        <strong>{step.title}</strong>
        &nbsp;{step.body}
        <button onClick={() => this.props.removeStep(step)}>Delete</button>
      </li>
    )
  }
}

export default StepListItem;
