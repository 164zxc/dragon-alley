import 'bootstrap'
import 'animate.css'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import navbar from './pages/Navbar.vue'

router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
Vue.config.productionTip = false;

let app = '';


firebase.initializeApp ({
    apiKey: "AIzaSyChhUUuDOhvslN64ho_GIGPwDdARJmZUyA",
    authDomain: "project-2302780931325811267.firebaseapp.com",
    databaseURL: "https://project-2302780931325811267.firebaseio.com",
    projectId: "project-2302780931325811267",
    storageBucket: "project-2302780931325811267.appspot.com",
    messagingSenderId: "977640784095",
    appId: "1:977640784095:web:309ed120e1b5811c"
});

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app =new Vue({
      router,
      navbar,
      render:h =>h(App)
    }).$mount('#app');
  }
});



