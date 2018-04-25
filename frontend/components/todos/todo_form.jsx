import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(varName) {
    return (event) => { this.setState({[varName]: event.target.value}) };
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, { done: false });
    this.props.createTodo(todo).then(
      () => this.setState({ title: "", body: "" })
    );
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
              placeholder="e.g. Buy toothpaste"
              value={this.state.title} />
          </label>
        </div>
        <div>
          <label>
            Body
            <textarea
              onChange={this.handleChange("body")}
              placeholder="e.g. 2-pack of Crest 3D White"
              value={this.state.body} />
          </label>
        </div>
        <input type="submit" value="Add todo" />
      </form>
    )
  }
}

export default TodoForm;
