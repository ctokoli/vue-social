import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import Router from 'vue-router';
import router from './router'



Vue.use(Router);

const routers = new Router({router});

const firebaseConfig = {
  apiKey: "AIzaSyAn1hyYx91utL5qtqnQY9RU4Xrf030s3FQ",
  authDomain: "vue-social-meme.firebaseapp.com",
  databaseURL: "https://vue-social-meme.firebaseio.com",
  projectId: "vue-social-meme",
  storageBucket: "vue-social-meme.appspot.com",
  messagingSenderId: "857799278176",
  appId: "1:857799278176:web:28bcff3c47168e86808d05"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  routers,
  render: h => h(App),
}).$mount('#app')
