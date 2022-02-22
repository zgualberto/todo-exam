import { uuid } from 'vue-uuid';

export default {
  todos: [
    { id: uuid.v4(), title: 'Get the trash', status: false },
    { id: uuid.v4(), title: 'Finish homework', status: false },
  ],
}
