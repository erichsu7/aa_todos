import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";


class TodoList extends React.Component {

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
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    )
  }
}

export default TodoList;
