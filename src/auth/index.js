import { router } from '../main';
import axios from 'axios';
import { debug } from 'util';

// const API_URL = 'http://localhost:5000/';
// const LOGIN_URL = API_URL + 'auth/signIn';

// const API_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'https://api-staging.attensi.com/api/v1' : 'https://api.attensi.com/api/v1';
// const API_URL = 'https://api.attensi.com/api/v1';
// console.log('here is the aws env: ', process.env.AWS_ENV)
// console.log('here is the node env: ', process.env.NODE_ENV)
// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

const API_URL = (process.env.AWS_ENV || process.env.AWS_ENV === 'staging') ? 'https://api-staging.attensi.com/api/v1' : 'https://api.attensi.com/api/v1';
const LOGIN_URL = API_URL + '/oauth/token';
const GETHOME_URL = API_URL + '/home';
const GETPRODUCTS_URL = API_URL + '/companies/current/products'
const GETLEADERBOARD_URL = API_URL + '/leaderboards';
const GETCURRENTCOMPANY_URL = API_URL + '/companies/current'

const SIGNUP_URL = API_URL + 'users';

// Attensi API
const apiToken = '9a499c250f280a8f39a3e7fb79798d0a6c5eb8e8cd95d67e4d2800d3caeeee14';
axios.defaults.headers.common['API-Token'] = apiToken; // this sets for ALL the request

let temp = location.host.split('.')[0]
let subdomain
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  subdomain = location.pathname.replace('/', '') === '' ? 'attensi' :  location.pathname.replace('/', '')
} else {
  subdomain = location.host.split('.')[0] === ('10' || 'localhost') ? 'attensi' : location.host.split('.')[0]
}
axios.defaults.headers.common['subdomain'] = subdomain

// VIKTIG: https://stackoverflow.com/questions/45578844/how-to-set-header-and-options-in-axios
/**
 * 
 * For a single request:
    let config = {
      headers: {
        header1: value,
      }
    }

    let data = {
      'HTTP_CONTENT_LANGUAGE': self.language
    }

    axios.post(URL, data, config).then(...)

 * For setting default global config:
    axios.defaults.headers.post['header1'] = 'value' // for POST requests
    axios.defaults.headers.common['header1'] = 'value' // for all requests
    For setting as default on axios instance:

    let instance = axios.create({
      headers: {
        post: {        // can be common or any other method
          header1: 'value1'
        }
      }
    })

    //- or after instance has been created
    instance.defaults.headers.post['header1'] = 'value'
 */

export default {
  user: {
    authenticated: false
  },

  getCurrentCompany(context){
    return axios
      .get(GETCURRENTCOMPANY_URL)
      .then(res => {
        console.log('weee get comapny worked, here is the response:', res);

        const result = {
          error: false,
          status: res.status,
          statusText: res.statusText,
          data: res.data
        };
        return result;
      })
      .catch(function(err) {
        console.log('poop: ', err);

        const result = {
          error: true,
          status: err.response.status,
          statusText: err.response.statusText
        };
        return result;
      });
  },

  getProducts(context){
    return axios
      .get(GETPRODUCTS_URL)
      .then(res => {
        console.log('weee get products worked, here is the response:', res);

        let items = []

        const result = {
          error: false,
          status: res.status,
          statusText: res.statusText,
          data: res.data
        };
        return result;
      })
      .catch(function(err) {
        console.log('poop: ', err);

        const result = {
          error: true,
          status: err.response.status,
          statusText: err.response.statusText
        };
        return result;
      });
  },

  getProductInfo(context, productId){
    const GETPRODUCT_URL = API_URL + '/products/' + productId
    return axios.get(GETPRODUCT_URL)
          .then(res => {
            // console.log('wee product is fetched, here it is: ', res.data)
            return res.data
          })
          .catch(err => { 
            console.log('poop happened: ', err)
            return err
          })
  },

  getRedeemableCode(context, productId){
    const GETPRODUCT_URL = API_URL + '/products/' + productId + '/redeem/itunes'
    return axios.get(GETPRODUCT_URL)
          .then(res => {
            console.log('wee product VPP is fetched, here it is: ', res.data)
            return res.data
          })
          .catch(err => { 
            console.log('poop happened: ', err)
            return err
          })
  },

  getLeaderboard(context, category, productId) {
    const GETLEADERBOARDWITHCATEGORY_URL = category ? GETLEADERBOARD_URL + '/' + category : GETLEADERBOARD_URL

    let config = null;
    if (productId){
      config = {
        params: {
          product_id : productId
        }
      }
    }
    return axios
      .get(GETLEADERBOARDWITHCATEGORY_URL, config)
      .then(res => {
        console.log('weee leaderboard fetching worked, here is the response:', res.data);
        const result = {
          error: false,
          status: res.status,
          statusText: res.statusText,
          data: res.data
        };
        return result;
      })
      .catch(function(err) {
        console.log('poop: ', err);

        const result = {
          error: true,
          status: err.response.status,
          statusText: err.response.statusText
        };
        return result;
      });
  },

  getHome(context, redirect) {
    return axios
      .get(GETHOME_URL)
      .then(res => {
        console.log('weee home worked, here is the response:', res);

        let items = []

        const result = {
          error: false,
          status: res.status,
          statusText: res.statusText,
          data: res.data
        };
        return result;
      })
      .catch(function(err) {
        console.log('poop: ', err);

        const result = {
          error: true,
          status: err.response.status,
          statusText: err.response.statusText
        };
        return result;
      });
  },

  login(context, creds, redirect) {
    axios
      .post(LOGIN_URL, creds)
      .then(res => {
        console.log('weee it worked, here is the response:', res);
        localStorage.setItem('id_token', res.data.access_token);

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

        this.user.authenticated = true;

        if (redirect) {
          router.replace(redirect);
        }

        return res.data;
      })
      .catch(function(err) {
        console.log('poop: ', err);
      });
  },

  signup(context, creds, redirect) {
    context.$http
      .post(SIGNUP_URL, creds, data => {
        localStorage.setItem('id_token', data.id_token);

        this.user.authenticated = true;

        if (redirect) {
          router.go(redirect);
        }
      })
      .error(err => {
        context.error = err;
      });
  },

  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
    router.replace('/login');
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token');
    if (jwt) {
      this.user.authenticated = true;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
      router.replace('/home');
    } else {
      this.user.authenticated = false;
      router.replace('/login');
    }
  },

  getAuthHeader() {
    return {
      Authorization: 'Bearer ' + localStorage.getItem('id_token')
    };
  },

  setRoute(route) {
    router.replace(route);
  }
};
