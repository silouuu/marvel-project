<template>
  <div class="about">
    <h1>All comics</h1>
    <ComicsList limit=40 />
  </div>
</template>
<script>
import ComicsList from '@/components/ComicsList.vue';

export default {
  name: 'Comics',
  components: {
    ComicsList,
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
