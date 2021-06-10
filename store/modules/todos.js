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
    },
    clearTodo(state){
      state.todos = []
    },
    deleteTodo(state, index){
      state.todos.splice(index,1)
      console.log(index)
    }
  },
  actions: {
    fetchTodos({ commit }) {
      todoRef
      .get()
      .then(res => {
        res.forEach((doc) => {
          commit('addTodo', doc.data())
        })
      })
      .catch(error => {
        console.log('えらー : ' + error)
      })
    },
    addTodo({commit}, todo){
      const ref = todoRef.doc()
      todoRef
      .doc(ref.id)
      .set({
        id: ref.id,
        task: todo.task,
        isFinished: todo.check
      })
      .then(function(docRef){
        commit('addTodo',todo)
      })
      .catch(function(error){
        console.error("えらー　あでぃんぐ　どきゅめんと: ", error)
      })
    },
    deleteTodo({commit}, {id,index}){

      todoRef.doc(id).delete()
      .then(
        commit('deleteTodo',index),
      )
      .catch(function(error){
        console.error("えらー　りむーぶ　どきゅめんと：", error)
      })
    }
  },
  getters: {
    getTodos(state){
      return state.todos
    }
  }
}
