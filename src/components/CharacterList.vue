<template>
  <div>
    <ul class="wrapperCharacters">
      <li v-for="character in characters" :key="character.id">
        <router-link class="nav-item" :to="{name:'Character', params: {id: character.id}}">
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
    limit: String,
    search: String,
  },
  data() {
    return {
      characters: [],
    };
  },
  beforeMount() {
    this.getCharacters(this.limit, '');
  },
  watch: {
    search: {
      immediate: true,
      handler(val) {
        this.getCharacters(this.limit, val);
      },
    },
  },
  methods: {
    async getCharacters(limit, searchInput) {
      console.log('--', this.search);
      let apiUrl = '';
      if (searchInput) {
        apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters?limit=${limit}&nameStartsWith=${searchInput}`, true);
      } else {
        apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters?limit=${limit}`, true);
      }
      console.log(apiUrl);
      console.log(searchInput);
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
