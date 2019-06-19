<template>
  <div class="container">
    <div class="left">
      <img src="../assets/loginbackground.jpg" width="100%" height="auto">
    </div>

    <div class="right">
      <h1>Sign up</h1>
      <h4>Email</h4>
      <div class="input">
        <input id="email" type="email" v-model="email" placeholder="Email">
      </div>
      <h4>Password</h4>
      <div class="input">
        <input type="password" id="password" v-model="password" placeholder="Password">
      </div>
      <br>
      <div class="btns">
        <button type="button" id="signupbtn" @click="signUp">Sign up</button>
      </div>
      <br>
      <div id=" info " class="info">
        or go back to
        <router-link to="/Login">login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    signUp: function() {
      if (this.password.length < 6) {
        alert("Stupid muggle, the password has to be more than six letters.");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            (user) =>{
              alert("Your account has been created!"),
              this.$router.replace("/Login");
            },
            (err) =>{
              alert("Oops. " + err.message);
            }
          );
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../style/logstyle.css";
</style>