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
    INIT_TODO(state, payload){
      state.todos = payload
    },
    ADD_TODO(state, payload){
      state.todos.push(payload)
    },
    SET_TODO(state,payload){
      const index = state.todos.findIndex(item => item.id === payload.id)
      if (index !== -1){
          state.todos[index] = payload
      }
    },
    REMOVED_TODO(state, payload){
      const index = state.todos.findIndex(item => item.id === payload.id)
      if(index !== -1){
          state.todos.splice(index,1)
      }
    }
  },
  actions: {
    fetchTodos({ commit }) {
      todoRef
      .onSnapshot(
        res => {
          res.docChanges().forEach(change =>{
            if(change.type === 'added'){
              commit('ADD_TODO', change.doc.data())
            }else if(change.type === 'modified'){
              commit('SET_TODO', change.doc.data())
            }else if(change.type === 'removed'){
              commit('REMOVED_TODO',change.doc.data())
            }
          })
          
        }
      )
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
      .catch(function(error){
        console.error("えらー　あでぃんぐ　どきゅめんと: ", error)
      })
    },
    deleteTodo({commit}, {id,index}){
      todoRef.doc(id).delete()
      .then(
        // commit('deleteTodo',index)
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
