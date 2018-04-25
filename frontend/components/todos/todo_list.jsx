import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";


class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <TodoListItem
              todo={todo}
              removeTodo={this.props.removeTodo}
              receiveTodo={this.props.receiveTodo}/>
          ))}
        </ul>
        <TodoForm createTodo={this.props.createTodo} />
      </div>
    )
  }
}

export default TodoList;
