import firebase from '~/plugins/firebase'
const db = firebase.firestore();

const todoRef = db.collection('todos')

export default{
  state(){
    return{
      todos: []
    }
  },
  mutations: {
    addTodo(state, task){
      state.todos.push(task)
    }
  },
  actions: {
    fetchTodos({ commit }) {
      todoRef
      .get()
      .then(res => {
        res.forEach((doc) => {
          console.log('さくせす : ' + `${doc.id} => ${doc.data()}`);
          commit('addTodo', doc.data())
        })
      })
      .catch(error => {
        console.log('えらー : ' + error)
      })
    }
  },
  getters: {
    getTodos(state){
      return state.todos
    }
  }
}

// export const state = () => ({
//   todos: []
// })

// export const mutations = {
//   addTodo(state, task){
//     state.todos.push(task)
//   }
// }

// export const actions = {
//   fetchTodos({ commit }) {
//     todoRef
//     .get()
//     .then(res => {
//       res.forEach((doc) => {
//         console.log('さくせす : ' + `${doc.id} => ${doc.data()}`);
//         commit('addTodo', doc.data())
//       })
//     })
//     .catch(error => {
//       console.log('えらー : ' + error)
//     })
//   }
// }

// export const getters = {
//   getTodos(state){
//     return state.todos
//   }
// }