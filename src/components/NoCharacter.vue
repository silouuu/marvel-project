<template>
  <div class="noCharacter">
    <h1>Oops aucun character ne correspond...</h1>
    <router-link :to="{name:'Characters'}">
      <AppButton msg="All characters" />
    </router-link>
  </div>
</template>

<script>
import AppButton from '@/components/commons/AppButton.vue';

export default {
  name: 'NoCharacter',
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

</style>
