export const fetchTodos = () => (
  $.get("/api/todos")
)

export const createTodo = todo => (
  $.post("/api/todos", { todo: todo })
)

export const updateTodo = todo => (
  $.ajax({
    method: "patch",
    url: "/api/todos/" + todo.id,
    data: { todo }
  })
)

export const deleteTodo = (todo) => (
  $.ajax({
    method: "delete",
    url: "/api/todos/" + todo.id
  })
)
