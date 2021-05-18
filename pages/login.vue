<template>
  <v-form>
    <v-container>
      <v-text-field label="UserID" v-model="uid"></v-text-field>
      <v-text-field label="Password" v-model="pass"></v-text-field>
      <v-btn color="primary" @click="login">ログイン</v-btn>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'default',
  components: {
  }
})

export default class LoginPage extends Vue{
  uid: string = ''
  pass: string = ''

  login(){
    alert('Login !!')
  }
}
</script>