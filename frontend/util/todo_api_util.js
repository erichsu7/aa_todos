export const fetchTodos = () => (
  $.get("/api/todos")
)

export const createTodo = todo => (
  $.post("/api/todos", { todo: todo })
)
