<template>
  <div>
    <ul class="wrapperCharacters">
      <li v-for="character in characters" v-bind:key="character.id">
        <router-link class="nav-item" :to="'/character/'+character.id">
          <CharacterItem :imgCharacter="character.thumbnail"
          :nameCharacter="character.name" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import CharacterItem from '@/components/CharacterItem.vue';
import api from '../api';

const axios = require('axios');

export default {
  name: 'CharacterList',
  components: {
    CharacterItem,
  },
  props: {
    limit: Number,
  },
  data() {
    return {
      dataAPI: Object,
      characters: [],
    };
  },
  beforeMount() {
    this.getCharacters(this.limit);
  },
  methods: {
    async getCharacters(limit) {
      const apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters?limit=${limit}`);

      const { data } = await axios.get(apiUrl);
      this.characters = data.data.results;
      console.log(this.characters);
    },
  },
};
</script>
<style  scoped lang="scss">
.wrapperCharacters{
  display: flex;
  flex-wrap: wrap;
}
</style>
