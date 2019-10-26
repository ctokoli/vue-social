<template>
  <div class="sigin">
    <h2>Sigin</h2>
    <button>Sigin in with Google</button>
  </div>
</template>

<script>

import firebase from 'firebase';

export default {
 name: 'login',
 data (){
   //user: ''
   
 },

 methods: {
   login() {
     const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((data) => {
        this.$router.replace('home');
 // This gives you a Google Access Token.
      //const token = result.credential.accessToken;
 // The signed-in user info.
      //console.log(data.user);
      
}).catch(err => {
    this.error = err.message;
});

   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
