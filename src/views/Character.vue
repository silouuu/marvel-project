<template>
  <div class="characterSingle">
    <div v-if="!isError" >
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <img class="ImageCharacterList"
        :src="thumbnail.path + '.' + thumbnail.extension" alt="">
    </div>
    <div v-else>
      <NoCharacter />
    </div>
  </div>
</template>

<script>
import NoCharacter from '@/components/NoCharacter.vue';

import api from '../api';

const axios = require('axios');

export default {
  name: 'Character',
  props: {
    id: String,
  },
  components: {
    NoCharacter,
  },
  data() {
    return {
      name: String,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      thumbnail: {
        extension: String,
        path: String,
      },
      isError: false,
    };
  },
  beforeMount() {
    this.getCharacter(this.id);
  },
  methods: {
    async getCharacter(id) {
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters/${id}`);

      axios({
        method: 'GET',
        url: apiUrl,
        headers: {},
      }).then((result) => {
        console.log(result);
        this.name = result.data.data.results[0].name;
        this.thumbnail.extension = result.data.data.results[0].thumbnail.extension;
        this.thumbnail.path = result.data.data.results[0].thumbnail.path;
        if (result.data.data.results[0].description !== '') {
          this.description = result.data.data.results[0].description;
        }
      }, (error) => {
        console.log('error');
        this.isError = true;
        console.log(error);
      });
    },
  },
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

</style>
