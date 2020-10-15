<template>
  <div class="characterSingle">
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <img class="ImageCharacterList"
      v-bind:src="thumbnail.path + '.' + thumbnail.extension" alt="">
  </div>
</template>

<script>
import api from '../api';

const axios = require('axios');

export default {
  name: 'Character',
  props: {
    id: String,
  },
  data() {
    return {
      name: String,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      thumbnail: {
        extension: String,
        path: String,
      },
    };
  },
  beforeMount() {
    this.getCharacter(this.id);
  },
  methods: {
    async getCharacter(id) {
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters/${id}`);

      const { data } = await axios.get(apiUrl);
      console.log(data.data.results);
      this.name = data.data.results[0].name;
      this.thumbnail.extension = data.data.results[0].thumbnail.extension;
      this.thumbnail.path = data.data.results[0].thumbnail.path;
      if (data.data.results[0].description !== '') {
        this.description = data.data.results[0].description;
      }
      console.log(this.thumbnail.path);
    },
  },
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

</style>
