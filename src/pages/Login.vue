<template>
  <div class="container">
    <div class="left">
      <img src="../assets/loginbackground.jpg" width="100%" height="auto">
    </div>

    <div class="right">
      <h1>Log in</h1>
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
        <button type="button" id="loginbtn" @click="login">Log in</button>
      </div>
      <br>
      <div id="info" class="info">
        Don't have an account? You can
        <router-link to="/Signup">create one</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import router from '../router'


export default {
  name: "Login",
  components:{
    
  },
  data() {
    return {
      email: "",
      password: "",
     
    };
  },

  methods: {
   login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user)=> {
            alert("Well done ! You are now connected");
            this.$router.replace('/HomePage');
            
          },
          (err)=> {
            alert("Oops. " + err.message);
             
          },
          
        );
    },
  
  }
};
</script>

<style lang="postcss" scoped>
@import "../style/logstyle.css";
</style>