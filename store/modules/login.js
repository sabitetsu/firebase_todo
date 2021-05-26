import firebase from '~/plugins/firebase'

export default{
  state(){

  },
  mutations(){
    
  },
  actions: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result){
        const user = result.user;
      }).catch(function(error){
        var errorCode = error.code;
        console.log('error : ' + errorCode)
      });
    }
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