import Vue from "vue"
import Vuex from "vuex"
import login from "@/store/modules/login.js"
import todos from "@/store/modules/todos"

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    login,
    todos
  }
})

export default store