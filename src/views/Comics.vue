<template>
  <div class="comics">
    <h1 class="title">All comics</h1>
    <ComicsList class="comics-list" limit=40 />
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

.comics{
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
.comics-list{
  max-width: 800px;
  margin: auto;
}

</style>
