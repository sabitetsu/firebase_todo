<template>
  <div class="todo">
    <h1>ToDo</h1>
    <table class="table is-narrow">
      <thead>
        <tr>
          <th>チェック</th>
          <th>タスク</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo,i) in $store.getters.getTodos" :key="i">
          <td><input type="checkbox" v-model="todo.isFinished"></td>
          <td>{{todo.task}}</td>
          <button @click="deleteTodo(todo.id,i)">×</button>
        </tr>
      </tbody>
    </table>
    <div>
      <input class="todo_input" v-model="newTodo" type="text" placeholder="task"><br>
      <p class="todo_add" @click="addTodo">add</p>
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
    },
    deleteTodo(id,index){
      this.$store.dispatch('deleteTodo',{ id,index })
    }
  },
  async created() {
    await this.$store.dispatch('fetchTodos')
  }
}
</script>

<style lang="scss">
.todo{
  background: gold;
  &_input{
    background: blue;
  }
  &_add{
    background: green;
    width: 10%;
  }
}
</style>