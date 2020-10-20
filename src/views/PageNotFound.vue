<template>
  <div class="wrapper-404">
    <h2>404</h2>
    <h1>Page Not Found</h1>
    <router-link :to="{name:'Home'}">
      <AppButton msg="Back to home" />
    </router-link>
  </div>
</template>

<script>
import AppButton from '@/components/commons/AppButton.vue';

export default {
  name: 'PageNotFound',
  components: {
    AppButton,
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.wrapper-404{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $purple;
  color: white;
  padding-bottom: 7em;
  h1{
    font-size: 60px;
    font-family: $roboto;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 2em;
    text-shadow: 1px 1px 8px $pink;
  }
  h2{
    margin-bottom: 0.5em;
  }
}
</style>
