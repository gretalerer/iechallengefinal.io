import Vue from 'vue'
import App from './App.vue'
import router from './router'
//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhpQTWRngukCCmLfmcZ1npUtuYF9G1Uv0",
  authDomain: "ie-challenge.firebaseapp.com",
  databaseURL: "https://ie-challenge-default-rtdb.firebaseio.com",
  projectId: "ie-challenge",
  storageBucket: "ie-challenge.appspot.com",
  messagingSenderId: "215950608839",
  appId: "1:215950608839:web:730e7bd85e0000961571e2",
  measurementId: "G-SVB91P438E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); // Initialize Firebase

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Firebase is connected. User is logged in:', user);
  } else {
    console.log('Firebase is connected. No user is logged in.');
  }
});

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
