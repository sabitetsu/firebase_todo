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
    <!-- <div v-for="todo in $store.getters.getTodos" :key="todo.index">
      {{todo.task}}
    </div> -->
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('fetchTodos')
  }
}
</script>