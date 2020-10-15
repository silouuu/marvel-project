<template>
  <div class="about">
    <h1>All my characters</h1>
    <Filters />
    <CharacterList limit=40 />
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

    };
  },

};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

</style>
