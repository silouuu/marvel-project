<template>
  <div class="noComics">
    <h1 class="title">Oops aucun comics ne correspond...</h1>
    <router-link :to="{name:'Comics'}">
      <AppButton msg="All comics" />
    </router-link>
  </div>
</template>

<script>
import AppButton from '@/components/commons/AppButton.vue';

export default {
  name: 'NoComic',
  components: {
    AppButton,
  },
  props: {
  },
  data() {
  },
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.noComics{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>
