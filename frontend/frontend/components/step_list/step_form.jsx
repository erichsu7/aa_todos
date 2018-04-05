import React from "react";
import uniqueId from "../../util/unique_id";

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(varName) {
    return (event) => { this.setState({ [varName]: event.target.value }) };
  }

  handleSubmit(event) {
    event.preventDefault();
    const step = Object.assign(
      {},
      this.state,
      {
        id: uniqueId(),
        todo_id: this.props.todoId
      }
    );
    this.props.receiveStep(step);
    // clear state
    this.state = {
      title: "",
      body: ""
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Title
            <input
              type="text"
              onChange={this.handleChange("title")}
              placeholder="e.g. Buy supplies"
              value={this.state.title} />
          </label>
        </div>
        <div>
          <label>
            Body
            <textarea
              onChange={this.handleChange("body")}
              placeholder="e.g. Soap, sponges, etc."
              value={this.state.body} />
          </label>
        </div>
        <input type="submit" value="Add step" />
      </form>
    );
  }
}

export default StepForm;
