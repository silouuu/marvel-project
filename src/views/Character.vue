<template>
  <div class="characterSingle">
    <div v-if="!isError" >
      <section class="characterPresentation">
        <div class="imgWrapper">
          <img class="ImageCharacterList"
          :src="thumbnail.path + '.' + thumbnail.extension" alt="{{ name }}">
        </div>
        <div class="contentWrapper">
          <h1 class="title">{{ name }}</h1>
          <p class="description">{{ description }}</p>
        </div>
      </section>
      <section class="characterComicsLinked">
        <div >
          <ComicsLinked :characterId="id"/>
        </div>
      </section>
    </div>
    <div v-else>
      <NoCharacter />
    </div>
  </div>
</template>

<script>
import NoCharacter from '@/components/NoCharacter.vue';
import ComicsLinked from '@/components/ComicsLinked.vue';

import api from '../api';

const axios = require('axios');

export default {
  name: 'Character',
  props: {
    id: String,
  },
  components: {
    NoCharacter,
    ComicsLinked,
  },
  data() {
    return {
      name: String,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      thumbnail: {
        extension: String,
        path: String,
      },
      comicsLinked: Object,
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

.characterSingle{
  background-color: $purple;
}
.characterPresentation{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em;
  .imgWrapper{
    max-width: 50vw;
  }
  .contentWrapper{
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
  }
}

</style>
