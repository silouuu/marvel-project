<template>
  <div class="ComicsLinkedWrapper">
    <h2 class="title">Comics associés</h2>
    <ul class="wrapperComics">
      <li class="itemComics" v-for="item in comics" :key="item.id">
        <router-link class="nav-item" :to="'/comics/'+item.id">
          <ComicsItem :comicsId="item.id" :titleComics="item.title" :imgComics="item.thumbnail"/>
        </router-link>
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

      axios({
        method: 'GET',
        url: apiUrl,
        headers: {},
      }).then((result) => {
        this.comics = result.data.data.results;
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

.wrapperComics{
  display: flex;
  justify-content: center;
  padding: 2em 0;
  .itemComics{
    max-width: 30%;
  }
}
.title{
  color: white;
}

</style>
