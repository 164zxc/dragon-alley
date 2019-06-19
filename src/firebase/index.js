import firebase from "firebase/app"
import router from "../router";

const config ={
    apiKey: "AIzaSyChhUUuDOhvslN64ho_GIGPwDdARJmZUyA",
    authDomain: "project-2302780931325811267.firebaseapp.com",
    databaseURL: "https://project-2302780931325811267.firebaseio.com",
    projectId: "project-2302780931325811267",
    storageBucket: "project-2302780931325811267.appspot.com",
    messagingSenderId: "977640784095",
    appId: "1:977640784095:web:309ed120e1b5811c"
};

firebase.initializeApp(config);



window.firebase = firebase

