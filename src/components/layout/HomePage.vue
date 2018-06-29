<template>
<div class="container">
    home page!
    <ul class="nav navbar-nav">
      <li> logged in!</li>
      <li> <a @click="logoutUser()">logout </a> </li>
    </ul>
    <div class="ui grid centered">
        <!-- <div class="loading" v-if="loading">
            Loading..
        </div> -->

        <div class="eight wide column"><products-pane v-if="productsData" v-bind:products='productsData'></products-pane></div>
        <div class="four wide column">
            <user-profile v-if="userData" v-bind:userProfileData='userData'></user-profile>
            <leaderboard></leaderboard>
        </div>
    </div>
</div>
  
</template>

<style>

</style>

<script>
import ProductsPane from '../products/ProductsPane';
import Leaderboard from '../leaderboard/Leaderboard';
import UserProfile from '../user/UserProfile';

import auth from '../../auth';

import Vue from 'vue';

Vue.component('products-pane', ProductsPane);
Vue.component('leaderboard', Leaderboard);
Vue.component('user-profile', UserProfile);

export default {
  created() {
    this.fetchHome();
  },
  data() {
    return {
      loading: false,
      productsData: null,
      userData: null,
      error: null
    };
  },
  methods: {
    logoutUser() {
      auth.logout();
    },
    async fetchHome() {
      this.error = this.data = null;
      this.loading = true;

      const result = await auth.getHome(this)

      if (result.error) {
        console.log('poop happened apparently')
        this.error = result.error.statusText
      } else {
        console.log('her er dataen din: ', result.data)
        this.productsData = result.data.assignments
        this.userData = result.data.profile
        this.loading = false;
      }
    }
  }
};
</script>