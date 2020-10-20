import {
  reactive,
} from 'vue';
// import axios from 'axios';
const md5 = require('md5');

const api = {
  data: {
    counter: 1000,
    message: 'rien',
    isLoading: false,
  },
  reset() {
    this.data.counter = 0;
  },
  load() {
    // this.data.isLoading = true;
    // setTimeout(() => {
    //   axios.get(url)
    //     .then((response) => {
    //       this.data.message = response.data.message
    //     })
    //     .catch(console.error)
    //     .then(() => {
    //       this.data.isLoading = false
    //     })
    // }, 3000)
  },
  getUrlApi(url, param = false) {
    const privateKey = process.env.VUE_APP_PRIVATEKEY;
    const publicKey = process.env.VUE_APP_PUBLICKEY;
    const timestamp = Math.round(+new Date() / 1000);
    const hash = md5(timestamp + privateKey + publicKey);
    let urlAPI = '';
    console.log(param);
    if (param) {
      urlAPI = `${url}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    } else {
      urlAPI = `${url}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    }
    return urlAPI;
  },
};
export default reactive(api);
