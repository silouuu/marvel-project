<template>
  <div>
    <ul>
      <li v-for="character in characters" v-bind:key="character.id" :CharacterId="character.id">
        <CharacterItem />
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
  data() {
    return {
      dataAPI: Object,
      characters: [],
    };
  },
  beforeMount() {
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      const aa = api.getUrlApi('https://gateway.marvel.com/v1/public/characters');
      console.log(aa);

      const { data } = await axios.get(aa);
      this.characters = data.data.results;
      console.log(this.characters);
    },
  },
};
</script>
<style  scoped lang="scss">

</style>
