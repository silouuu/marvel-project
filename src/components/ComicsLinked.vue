<template>
  <div class="ComicsLinkedWrapper">
    <ul>
      <li>

      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api';

const axios = require('axios');

export default {
  name: 'ComicsLinked',
  props: {
    characterId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    };
  },
  beforeMount() {
    this.getComicsLinked(this.characterId);
  },
  methods: {
    async getComicsLinked(characterId) {
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics`);

      axios({
        method: 'GET',
        url: apiUrl,
        headers: {},
      }).then((result) => {
        console.log(result);
      }, (error) => {
        console.log('error');
        console.log(error);
      });
    },
  }
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

</style>
