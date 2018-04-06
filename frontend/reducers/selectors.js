export const allTodos = (state) => {
  return Object.values(state.todos);
}

export const stepsForTodoId = (state, todoId) => {
  return Object.keys(state.steps).reduce((stepsForTodoId, stepId) => {
    const step = state.steps[stepId];
    step.todo_id === todoId && stepsForTodoId.push(step);
    return stepsForTodoId
  }, []);
}
