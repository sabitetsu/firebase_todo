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
