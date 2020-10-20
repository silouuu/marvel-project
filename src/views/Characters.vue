<template>
  <div class="about">
    <h1>All my characters</h1>
    <form action="">
      <input v-model="message" @input="filterCharacters" placeholder="modifiez-moi">
      <p>Le message est : {{ message }}</p>
    </form>
    <Filters />
    <CharacterList limit="40" :search="message"/>
  </div>
</template>
<script>
import Filters from '@/components/CharacterFilters.vue';
import CharacterList from '@/components/CharacterList.vue';

export default {
  name: 'Characters',
  components: {
    Filters,
    CharacterList,
  },
  props: {

  },
  data() {
    return {
      searchText: String,
      message: '',
    };
  },
  methods: {
    filterCharacters() {
      console.log(this.message);
    },
  },
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

form{
  padding: 4em;
  input{
    border: 1px solid black;
  }
}
</style>
