<template>
  <v-container>
    <h1>Hello World!</h1>
    <div v-if="isLogin"><v-btn @click="logout">ログアウト</v-btn></div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { auth } from '../plugins/firebase'

@Component({
  layout: 'default',
  components: {

  }
})

export default class IndexPage extends Vue{
  isLogin:boolean = false
  async mounted(){
    await auth.onAuthStateChanged((user) => this.isLogin = user ? true : false)
  }
  async logout(){
    await auth.signOut()
    this.$router.push('/login')
  }
}
</script>

<style lang="scss">

</style>
