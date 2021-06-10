<template>
  <v-form>
    <v-container>
      <v-text-field label="MailAddress" v-model="mail"></v-text-field>
      <v-text-field label="Password" v-model="pass"></v-text-field>
      <v-btn color="primary" @click="login">ログイン</v-btn>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import firebase from '../plugins/firebase'

@Component({
  layout: 'default',
  components: {
  }
})

export default class LoginPage extends Vue{
  mail: string = ''
  pass: string = ''

  login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return firebase.auth().signInWithPopup(provider)
      })
      .catch((error) => {
        console.log('えらー：'+ error)
      })
    }
}
</script>