<template >
  <div class="section flex flex-col justify-center items-center">
    <h1 class="section-title">Perfectly Balanced,<span> as all things should be</span></h1>
    <a href="#charaters" class="button"><Button msg="discover" styleAppButton="primary"/></a>
  </div>
</template>

<script>
import Button from '@/components/commons/AppButton.vue';

export default {
  name: 'Visuel',
  components: {
    Button,
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_mixins.scss';

html{
  scroll-behavior: smooth;
}
.section{
  min-height: 100vh;
  @include background('../assets/img/home-visuel.png');
  .button{
    display: block;
    margin: 2em;
  }
  .section-title{
    color: $white;
    text-transform: uppercase;
    font-size: 66px;
    font-family: $roboto;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    span{
      display: block;
    }
  }
}
</style>
