<template>
  <div class="">
    Pas de comics associés pour ce charactère
    <router-link :to="{name:'Comics'}">
      <AppButton msg="All comics" />
    </router-link>
  </div>
</template>

<script>
import AppButton from '@/components/commons/AppButton.vue';

export default {
  name: 'NoComicsLinked',
  props: {
  },
  components: {
    AppButton,
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
