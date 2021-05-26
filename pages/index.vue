<template>
  <v-container>
    <h1>Hello World!</h1>
    <!-- <button class="button is-primary is-rounded" @click="login">
        ログイン
    </button> -->
    <Todo />
    <!-- <div v-if="isLogin"><v-btn @click="logout">ログアウト</v-btn></div> -->
  </v-container>
</template>

<script>
// import { Vue, Component } from 'vue-property-decorator'
import { auth } from '../plugins/firebase'

// @Component({
//   layout: 'default',
//   components: {
//   }
// })

// export default class IndexPage extends Vue{
//   isLogin:boolean = false
//   async mounted(){
//     await auth.onAuthStateChanged((user) => this.isLogin = user ? true : false)
//   }
//   async logout(){
//     await auth.signOut()
//     this.$router.push('/login')
//   }
// }
export default {
  middleware: 'auth',
  data(){
    return{
      isLogin: false
    }
  },
  // async mounted(){
  //   await auth.onAuthStateChanged((user) => this.isLogin = user ? true : false)
  // },
  // async logout(){
  //   await auth.signOut()
  //   this.$router.push('/login')
  // },
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    }
  }
}


</script>

<style lang="scss">

</style>
