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
import firebase from '../plugins/firebase'

export default {
  // middleware: 'auth',
  data(){
    return{
      isLogin: false
    }
  },
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    }
  },
  mounted(){
    console.log(firebase.auth().currentUser)
  }
}


</script>

<style lang="scss">

</style>
