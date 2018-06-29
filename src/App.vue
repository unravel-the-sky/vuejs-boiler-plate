<template>
  <div id="app">
    <!-- <task-list v-bind:tasks='tasks'></task-list> -->
    <!-- <login-page></login-page> -->
    <!-- <home></home> -->
    <div class="container">
      <!-- <p>
        <router-link to="/home"> home </router-link>
        <router-link to="/login"> login </router-link>
      </p> -->
      <!-- <ul class="nav navbar-nav">
        <li v-if="user.authenticated"> logged in! {{user}}</li>
        <li v-if="!user.authenticated" ><router-link  to="/login"> login </router-link></li>
        <li><router-link v-if="user.authenticated" to="/login"> logout </router-link></li>
      </ul> -->

      <router-view></router-view>
    </div>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import TaskList from './components/TaskList'
// import LoginPage from './components/LoginPage'

// import Home from './components/Home'

import auth from './auth';

import store from './store/companyData'


export default {
  name: 'app',
  store,
  components: {
    // HelloWorld
    // TaskList
    // LoginPage
    // Home
  },
  data() {
    return {
      user: auth.user
    };
  },
  methods: {
    logout() {
      console.log('logging out..');
      currentUser.authenticated = false;
      console.log('user: ', user);
    }
  },

  created(){
    console.log('logged in? ', auth.user.authenticated)
  }

};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
