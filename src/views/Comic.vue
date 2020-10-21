<template>
  <div class="comicSingle">
    <template v-if="!isLoading">
      <div v-if="!isError" >
        <section class="comicPresentation">
          <div class="imgWrapper">
            <img class="ImageCharacterList"
            :src="thumbnail.path + '.' + thumbnail.extension" alt="{{ title }}">
          </div>
          <div class="contentWrapper">
            <h1 class="title">{{ title }}</h1>
            <p class="description">{{ description }}</p>
            <p class="price">{{ price }}€</p>
          </div>
        </section>
      </div>
      <div v-else>
        <NoComics />
      </div>
    </template>
    <template v-else>
      <Loading />
    </template>
  </div>
</template>

<script>
import NoComics from '@/components/NoComic.vue';
import Loading from '@/components/Loading.vue';

import api from '../api';

const axios = require('axios');

export default {
  name: 'Comic',
  props: {
    id: String,
  },
  components: {
    NoComics,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      title: String,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      thumbnail: {
        extension: String,
        path: String,
      },
      price: Number,
      comicsLinked: Object,
      isError: false,
    };
  },
  beforeMount() {
    this.getComic(this.id);
  },
  methods: {
    async getComic(id) {
      this.isLoading = true;
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/comics/${id}`);

      axios({
        method: 'GET',
        url: apiUrl,
        headers: {},
      }).then((result) => {
        console.log(result.data.data.results[0]);
        this.title = result.data.data.results[0].title;
        this.description = result.data.data.results[0].description;
        this.price = result.data.data.results[0].prices[0].price;
        this.thumbnail.path = result.data.data.results[0].thumbnail.path;
        this.thumbnail.extension = result.data.data.results[0].thumbnail.extension;
        this.isLoading = false;
      }, (error) => {
        console.log('error');
        this.isError = true;
        this.isLoading = false;
        console.log(error);
      });
    },
  },
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.comicSingle{
  background-color: $purple;
}
.comicPresentation{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em;
  .imgWrapper{
    max-width: 50vw;
  }
  .contentWrapper{
    position: relative;
    border: 3px solid $lightpurple;
    background-color: #161125;
    padding: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin: 2em 2em 2em -3em;
    box-shadow: 0px 0px 20px 8px #00000040;
    .title{
      text-transform: uppercase;
      color: $lightpurple;
      font-family: $roboto;
      font-weight: 700;
      font-size: 25px;
      line-height: 1;
      margin-bottom: 1em;
    }
    .description{

    }
    .price{
      position: absolute;
      top: -20px;
      right: -20px;
      background: white;
      padding: 10px;
      color: black;
      font-size: 20px;
    }
  }
}

</style>
