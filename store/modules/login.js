import firebase from '~/plugins/firebase'

export default{
  state(){

  },
  mutations(){
    
  },
  actions: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return firebase.auth().signInWithPopup(provider)
      })
      .catch((error) => {
        console.log('えらー：'+ error)
      })
    },
    onAuthStateChanged({ commit, getters }, { authUser, claims }) {
      console.log(authUser)
      if (!authUser) {
        commit('RESET')
        return
      } else if (getters.isLogin) {
        return
      }
    },
  },
  getters: {

  }
}

// export const state = () =>({

// })

// export const mutations = {

// }

// export const actions = {
//   login() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result){
//       const user = result.user;
//     }).catch(function(error){
//       var errorCode = error.code;
//       console.log('error : ' + errorCode)
//     });
//   }
// }

// export const getters = {
  
// }

// export default login