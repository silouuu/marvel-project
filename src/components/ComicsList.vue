<template>
  <div>
    <ul v-if="!isLoading" class="wrapperComics">
      <li v-for="item in comics" :key="item.id">
        <router-link class="nav-item" :to="{name:'Comic', params: {id: item.id}}">
          <ComicsItem class="comicItem" :imgComics="item.thumbnail"
          :titleComics="item.title" />
        </router-link>
      </li>
    </ul>
    <template v-else>
      <Loading />
    </template>
  </div>
</template>

<script>
import ComicsItem from '@/components/ComicsItem.vue';
import Loading from '@/components/Loading.vue';
import api from '../api';

const axios = require('axios');

export default {
  name: 'ComicsList',
  components: {
    ComicsItem,
    Loading,
  },
  props: {
    limit: Number,
  },
  data() {
    return {
      isLoading: false,
      dataAPI: Object,
      comics: [],
    };
  },
  beforeMount() {
    this.getComics(this.limit);
  },
  methods: {
    async getComics(limit) {
      this.isLoading = true;
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/comics?limit=${limit}`);

      const { data } = await axios.get(apiUrl);
      this.comics = data.data.results;
      this.isLoading = false;
    },
  },
};
</script>
<style  scoped lang="scss">
.wrapperComics{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
