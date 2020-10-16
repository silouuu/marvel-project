<template>
  <div>
    <ul class="wrapperComics">
      <li v-for="item in comics" :key="item.id">
        <router-link class="nav-item" :to="'/comics/'+comics.id">
          <ComicsItem :imgComics="item.thumbnail"
          :titleComics="item.title" />
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
  name: 'ComicsList',
  components: {
    ComicsItem,
  },
  props: {
    limit: Number,
  },
  data() {
    return {
      dataAPI: Object,
      comics: [],
    };
  },
  beforeMount() {
    this.getComics(this.limit);
  },
  methods: {
    async getComics(limit) {
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/comics?limit=${limit}`);

      const { data } = await axios.get(apiUrl);
      this.comics = data.data.results;
    },
  },
};
</script>
<style  scoped lang="scss">
.wrapperComics{
  display: flex;
  flex-wrap: wrap;
}
</style>
