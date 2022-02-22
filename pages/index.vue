<template>
  <v-container style="height: 100% !important">
    <v-row style="height: 100% !important" justify="center" align="center">
      <v-col align-self="center" cols="12" md="3">
        <v-card elevation="0">
          <v-card-title>Checklist</v-card-title>
          <v-card-text>
            <v-btn
              id="btn-pending"
              rounded
              pill
              class="active"
              elevation="0"
              @click="filterTodo('pending')"
            >
              Pending
            </v-btn>
            <v-btn
              id="btn-completed"
              rounded
              pill
              elevation="0"
              @click="filterTodo('completed')"
            >
              Completed
            </v-btn>
            <div v-show="statusFilter == 'pending'" class="py-2 mb-4">
              <v-list-item v-for="todo in pendingTodos" :key="todo.id">
                <v-list-item-action>
                  <v-checkbox
                    color="primary"
                    value
                    :label="todo.title"
                    @change="toggle(todo)"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </div>
            <div v-show="statusFilter == 'completed'" class="py-2 mb-4">
              <v-list-item v-for="(todo, index) in completedTodos" :key="index">
                <v-list-item-content>
                  {{ todo.title }}
                </v-list-item-content>
              </v-list-item>
            </div>
            <v-row v-show="statusFilter == 'pending'" class="px-4">
              <v-col cols="7">
                <v-text-field
                  v-model="newItem"
                  align-self="center"
                  placeholder="Add an item here"
                ></v-text-field>
              </v-col>
              <v-col cols="5" class="pt-6 text-md-center">
                <v-btn
                  rounded
                  align-self="center"
                  color="primary white--text"
                  @click="addItem"
                  >Add item</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      newItem: null,
      statusFilter: 'pending',
    }
  },
  computed: {
    ...mapGetters({
      pendingTodos: 'todos/GET_TODOS_PENDING',
      completedTodos: 'todos/GET_TODOS_COMPLETED',
    }),
  },
  methods: {
    filterTodo(status) {
      if (status === 'pending') {
        document.querySelector('#btn-completed').classList.remove('active')
        document.querySelector('#btn-pending').classList.add('active')

        this.statusFilter = 'pending'
      } else if (status === 'completed') {
        document.querySelector('#btn-completed').classList.add('active')
        document.querySelector('#btn-pending').classList.remove('active')

        this.statusFilter = 'completed'
      }
    },
    addItem() {
      if (this.newItem !== null && this.newItem !== '') {
        this.addTodo(this.newItem)
        this.newItem = null
      }
    },
    toggle(todo) {
      const vm = this

      setTimeout(() => {
        vm.toggleTodo(todo)
      }, 1000)
    },
    ...mapActions({
      addTodo: 'todos/addTodo',
      toggleTodo: 'todos/toggleTodo',
    }),
  },
}
</script>

<style>
.v-btn.active {
  background-color: #bdbdbd !important;
  color: #fff !important;
}

.v-btn {
  background-color: transparent !important;
  color: #bdbdbd !important;
}

.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}

label {
  margin-left: 8px !important;
}
</style>
