<template>
    <div class="main-content">
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui image header">
                    <div class="content">
                       Hallo! Login pls:
                    </div>
                </h2>
                <!-- <div class="alert" v-if="error">
                    <p> {{error}} </p>
                </div> -->
                <form class="ui large form">
                <div class="ui stacked segment">
                    <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon"></i>
                        <input type="text" name="email" v-model="credentials.username" placeholder="username">
                    </div>
                    </div>
                    <div class="field">
                    <div class="ui left icon input">
                        <i class="lock icon"></i>
                        <input type="password" name="password" v-model="credentials.password" placeholder="password">
                    </div>
                    </div>
                    <div class="ui fluid large teal submit button" @click="submit()">Submit</div>
                </div>

                <div class="ui error message"></div>

                </form>
            </div>
        </div>
    </div>

</template>

<style scoped>
.main-content {
  margin: auto;
  max-width: 350px;
  margin-top: 100px;
}
</style>

<script>
import auth from '../../auth';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: ''
    };
  },

  methods: {
    submit() {
      let credentials = {
        grant_type: 'password',
        username: this.credentials.username,
        password: this.credentials.password
      };

      console.log('yo, credentials: ', credentials);

      let loginUserRes = auth.login(this, credentials, '/home');
      console.log('login result: ', loginUserRes);
    }
  }
};
</script>
