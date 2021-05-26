import { Middleware } from '@nuxt/types'
import { auth } from '../plugins/firebase'

const middleware:Middleware = ({ route, store, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if(! user && route.name !== 'login') redirect('/login')
  })
}
// test@test.com testpass
export default middleware