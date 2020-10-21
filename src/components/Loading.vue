<template >
  <div class="loading">
    <div style="width:100%;height:0;padding-bottom:53%;position:relative;">
        <iframe src="https://giphy.com/embed/10ADhj1QPawFna" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Loading',
  components: {
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_mixins.scss';

.loading{
    width: 100vw;
    height: 100vh;
    background-color: $darkpurple;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    .title{
        color: white;
        text-transform: uppercase;
    }
}
</style>
