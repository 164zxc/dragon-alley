<template>
  <div>
    <div id="mySidenav" class="sidenav">

      
      <ul>
        
        <li>
          <router-link to="/HomePage">Home</router-link>
        </li>
        <li>
          <router-link to="/Flourish">Flourish & Blotts</router-link>
        </li>
        <li>
          <router-link to="/Magical">Ollivanders</router-link>
        </li>
        <li>
          <router-link to="/Weasleys">Weasleys'</router-link>
        </li>
        <li>
          <router-link to="/Owl">Eeylops Owl</router-link>
        </li>
        <li>
          <router-link to="/Quidditch">Quality Quidditch</router-link>
        </li>
        <li>
          <router-link to="/Cart">Cart</router-link>
        </li>
        <li>
        
          <div>
          <router-link to="/Login">
              <button @click="login">Log In</button>
            </router-link>
          </div>  
           <div>
           <router-link to="/HomePage">
              <button  @click="logout">Log Out</button>
            </router-link>
          </div>
     
         
        </li>
      </ul>
    </div>
    <div id="main">
      <label>
        <input type="checkbox">
        <span class="menu" v-on:click="myNav" id="myBtn">
          <span class="hamburger"></span>
        </span>
      </label>
    </div>
  </div> 
</template>
<script>
import Login from './Login'
import firebase from 'firebase'

export default {
  name: "Navbar",
  data() {
 
return{

}
  },
  components:{
  
  },

    


  methods: {
   
    logout: function() {
      alert ("You are now logged out");
      firebase.auth().signOut();
      return user = null
    },
    
    myNav: function() {
      var nav = document.getElementById("mySidenav"),
        main = document.getElementById("main");
      if (nav.style.width == "300px") {
        nav.style.width = "0";
        main.style.marginRight = "0";
      } else {
        nav.style.width = "300px";
        main.style.marginRight = "300px";
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../style/home.css";
</style>