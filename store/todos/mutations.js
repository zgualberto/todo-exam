import { uuid } from 'vue-uuid';

export default {
  add(state, text) {
    state.todos.push({
      id: uuid.v4(),
      title: text,
      status: false
    })
  },
  toggle(state, todo) {
    todo.status = !todo.status
  }
}
