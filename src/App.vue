<template>
  <div class="wrapper-view">
    <Header />
    <router-view/>
  </div>
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
.wrapper-view{
  padding-top: 70px;
}
</style>
