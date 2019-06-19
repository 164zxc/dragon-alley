import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import HomePage from "../pages/HomePage.vue"
import Login from "../pages/Login.vue"
import Signup from "../pages/Signup.vue"
import Flourish from "../pages/Flourish.vue"
import Owl from "../pages/Owl.vue"
import Magical from "../pages/Magical.vue"
import Weasleys from "../pages/Weasleys.vue"
import Quidditch from "../pages/Quidditch.vue"
import Cart from "../pages/Cart.vue"





Vue.use(VueRouter); //啟用Router
Vue.use(firebase);

const router = new VueRouter ({
    mode:"history",
    routes :[
        {path:'*',redirect:'/HomePage'},
        {path:'/',redirect:'/HomePage'},
        {path:"/HomePage", component: HomePage},
        {path:"/Login",name:'Login', component: Login},
        {path:"/Signup",name:'SignUp', component: Signup},
        {path:"/Flourish",component: Flourish},
        {path:"/Owl",component: Owl},
        {path:"/Magical",component: Magical},
        {path:"/Quidditch",component: Quidditch},
        {path:"/Weasleys",component: Weasleys},
        {path:"/Cart",component: Cart,
        meta:{
           requiresAuth:true}
        }
    ]

});

router.beforeEach((to,from,next) =>{
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth && !currentUser) 
    {  alert ("You have to login first.")
        next('login');}
    else next();

});

export default router;


