const md5 = require('md5');

const actions = {
  getUrlApi(url) {
    const privateKey = process.env.VUE_APP_PRIVATEKEY;
    const publicKey = process.env.VUE_APP_PUBLICKEY;
    const timestamp = Math.round(+new Date() / 1000);
    const hash = md5(timestamp + privateKey + publicKey);
    return `${url}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  },
};

export default {
  actions,
};
