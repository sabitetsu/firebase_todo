<template>
  <div>
    <h1>ToDo</h1>
    <table class="table is-narrow">
      <thead>
        <tr>
          <th>チェック</th>
          <th>タスク</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.index">
          <td><input type="checkbox" v-model="todo.isFinished"></td>
          <td>{{todo.task}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <input v-model="newTodo" type="text" placeholder="task"><br>
      <p @click="addTodo">add</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      newCheck: false
    }
  },
  methods: {
    addTodo(){
      const task = this.newTodo
      const check = this.newCheck

      this.$store.dispatch('addTodo', {task, check})
      this.newTodo = ''
    }
  },
  async created() {
    await this.$store.dispatch('fetchTodos')
  }
}
</script>