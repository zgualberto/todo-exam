export default {
  addTodo({ commit }, text) {
    commit('add', text)
  },
  toggleTodo({ commit }, todo) {
    commit('toggle', todo)
  },
}
