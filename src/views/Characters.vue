<template>
  <div class="characters">
    <h1 class="title">All my characters</h1>
    <div class="form-wrapper">
      <h3>Recherche : </h3>
      <form action="">
        <input v-model="message" @input="filterCharacters">
      </form>
    </div>
    <Filters />
    <CharacterList class="character-list" limit="40" :search="message"/>
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
.characters{
  background-color: $purple;
  color: white;
  .title{
    font-family: Roboto !important;
    font-size: 3rem !important;
    text-align: center;
    text-transform: uppercase;
    opacity: 1;
    text-shadow: 0px 0px 10px #9100FF;
    padding: 50px 0;
    font-weight: 500;
  }
}
.character-list{
  max-width: 800px;
  margin: auto;
}
.form-wrapper{
  display: flex;
  max-width: 500px;
  margin: auto;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  form{
    padding: 0 4em;
    input{
      border: 1px solid black;
      color: black;
    }
  }
}
</style>
