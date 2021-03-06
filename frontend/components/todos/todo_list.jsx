import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchSteps();
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <TodoListItem
              todo={todo}
              deleteTodo={this.props.deleteTodo}
              updateTodo={this.props.updateTodo} />
          ))}
        </ul>
        <TodoForm
          createTodo={this.props.createTodo}
          errors={this.props.errors} />
      </div>
    )
  }
}

export default TodoList;
