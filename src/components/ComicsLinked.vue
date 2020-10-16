<template>
  <div class="ComicsLinkedWrapper">
    <h2>Comics associés</h2>
    <ul>
      <li v-for="item in comics" :key="item.id">
        <ComicsItem :comicsId="item.id" :titleComics="item.title" :imgComics="item.thumbnail"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ComicsItem from '@/components/ComicsItem.vue';
import api from '../api';

const axios = require('axios');

export default {
  name: 'ComicsLinked',
  components: {
    ComicsItem,
  },
  props: {
    characterId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      comics: [],
    };
  },
  beforeMount() {
    this.getComicsLinked(this.characterId);
  },
  methods: {
    async getComicsLinked(characterId) {
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics?limit=4`);
      console.log(apiUrl);

      axios({
        method: 'GET',
        url: apiUrl,
        headers: {},
      }).then((result) => {
        this.comics = result.data.data.results;
        console.log('this.comics');
        console.log(this.comics);
      }, (error) => {
        console.log('error');
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
