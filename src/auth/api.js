import { router } from '../main';
import axios from 'axios';

// const API_URL = 'https://api-staging.attensi.com/api/v1';
// const GETHOME_URL = API_URL + '/home';

// Attensi API
const apiToken = 'bfb744f8bb4dbec69e8340e4b0f4d2af2098cf7c27212c490c4dac210a43d3a9';
axios.defaults.headers.common['API-Token'] = apiToken; // this sets for ALL the request
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

export default {
  getHome(context, redirect) {
    axios
      .get(GETHOME_URL)
      .then(res => {
        console.log('weee get home worked, here is the response:', res);
        localStorage.setItem('id_token', res.data.access_token);

        if (redirect) {
          router.replace(redirect);
        }
      })
      .catch(function(err) {
        console.log('poop: ', err);
        return err;
      });
  }
};
