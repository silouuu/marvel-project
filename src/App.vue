<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from '@/components/layout/TheHeader.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">

</style>
