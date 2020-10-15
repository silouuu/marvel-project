<template>
  <div class="home">
    <section>
      <WelcomeSection />
    </section>
    <section id="charaters" class="flex flex-col items-center">
      <h2>Characters</h2>
      <p v-on:click="getUser()">aa</p>
      <CharacterFilters/>
      <CharacterList/>
    </section>
  </div>
</template>

<script>
import WelcomeSection from '@/components/WelcomeSection.vue';
import CharacterFilters from '@/components/CharacterFilters.vue';
import CharacterList from '@/components/CharacterList.vue';

const axios = require('axios');

const md5 = require('md5');

export default {
  name: 'Home',
  components: {
    WelcomeSection,
    CharacterFilters,
    CharacterList,
  },
  data() {
    return {
      dataAPI: Object,
    };
  },
  beforeMount() {
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      const publicKey = '123def4ba0e2cd014c5e7f4f671d018c';
      const privateKey = 'a4916f029a0afef31c3be5c60b9814a2114afb42';
      const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
      const ts = '1';
      const hash = md5(ts + privateKey + publicKey);
      console.log(hash);
      const ApiGetUrl = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      const { data } = await axios.get(ApiGetUrl);
      this.data = data;
      console.log(this.data);
    },
  },
};

</script>
<style  scoped lang="scss">
#charaters{
  padding: 5em;
}
</style>
