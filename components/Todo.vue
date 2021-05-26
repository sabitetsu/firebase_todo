<template>
  <div>
    <h1>ToDo</h1>
    <table class="table is-narrow">
      <thead>
        <tr>
          <th>todo</th>
          <th>limit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.todo">
          <td>{{todo.task}}</td>
          <td>{{todo.isFinished}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('fetchTodos')
  }
}
</script>