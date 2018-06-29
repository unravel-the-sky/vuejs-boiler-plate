<template>
    <div class="main-content">
        <div v-if="methodNotSelected" class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui image header">
                    <div class="content">
                       Hallo! Select login method:
                    </div>
                </h2>
                   <div class="ui fluid small submit button login-buttons" @click="selectMethod('credentials')">credentials </div>
                   <div class="ui fluid small submit button login-buttons" @click="selectMethod('sms')">with sms </div>
                   <div class="ui fluid small submit button login-buttons" @click="selectMethod('email')"> with email </div>
                   <div class="ui fluid small submit button login-buttons" @click="selectMethod('ad')"> with ad </div>
            </div>
        </div>

        <router-view></router-view>
        
    </div>

            <!-- <component v-bind:is="selectedLoginComponent">

        </component> -->
</template>

<style scoped>
.main-content {
  margin: auto;
  max-width: 350px;
  margin-top: 100px;
}
.login-buttons {
  margin: 5px;
}
</style>


<script>
import LoginPageCredentials from './LoginPageCredentials';
import LoginPageAd from './LoginPageAd';
import LoginPageEmail from './LoginPageEmail';
import LoginPageSms from './LoginPageSms';

import auth from '../../auth'

export default {
  name: 'loginMain',

  components: {
    LoginPageCredentials,
    LoginPageAd,
    LoginPageCredentials,
    LoginPageSms
  },

  data() {
    return {
      user: auth.user,
      selectedMethod: '',
      loginMethods: ['credentials', 'ad', 'email', 'sms'], // bunu kullan aslinda sonra, kullan-at

      methodNotSelected: true
    };
  },

  methods: {
    selectMethod(method) {
      this.selectedMethod = method;
      this.methodNotSelected = false;
      
      const route = 'login/'+method
      auth.setRoute(route)
    }
  },

  computed: {
    selectedLoginComponent: function() {
      return 'LoginPage' + this.selectedMethod;
    }
  }
};
</script>
