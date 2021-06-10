import { Middleware } from '@nuxt/types'
import firebase from '../plugins/firebase'

const middleware:Middleware = ({ route, store, redirect }) => {
  console.log(firebase.auth().currentUser)
  if(!firebase.auth().currentUser){
    redirect(302,'/login')
  }
}
// test@test.com testpass
export default middleware