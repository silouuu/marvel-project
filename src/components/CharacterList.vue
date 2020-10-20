<template>
  <div>
    <ul class="wrapperCharacters">
      <li v-for="character in characters" :key="character.id">
        <router-link class="nav-item" :to="{name:'Character', params: {id: character.id}}">
          <CharacterItem class="characterItem" :imgCharacter="character.thumbnail"
          :nameCharacter="character.name" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import CharacterItem from '@/components/CharacterItem.vue';
import text50 from '@/mixins/index';
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
  mixins: [text50],
  methods: {
    async getCharacters(limit, searchInput) {
      let apiUrl = '';
      if (searchInput) {
        apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters?limit=${limit}&nameStartsWith=${searchInput}`, true);
      } else {
        apiUrl = api.getUrlApi(`https://gateway.marvel.com/v1/public/characters?limit=${limit}`, true);
      }
      const { data } = await axios.get(apiUrl);
      this.characters = data.data.results;
    },
  },
};
</script>
<style  scoped lang="scss">
.wrapperCharacters{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
