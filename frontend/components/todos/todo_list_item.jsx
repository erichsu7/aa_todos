import React from "react";
import TodoDetailViewContainer from "./todo_detail_view_container";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTodoDone = this.toggleTodoDone.bind(this);
  }

  toggleTodoDone() {
    const { todo } = this.props;
    const newTodo = Object.assign({}, todo, { done: !todo.done });
    this.props.updateTodo(newTodo);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.done}
          onClick={this.toggleTodoDone}/>
        <strong>{todo.title}</strong>
        &nbsp;{todo.body}
        <button onClick={() => this.props.deleteTodo(todo)}>Delete</button>
        <TodoDetailViewContainer todo={todo} />
      </li>
    )
  }
}

export default TodoListItem;
