export default {
  GET_TODOS_COMPLETED: (state) => state.todos.filter((todo) => todo.status),
  GET_TODOS_PENDING: (state) => state.todos.filter((todo) => !todo.status),
}
