<template>
  <span :class="styleAppButton" >{{ msg }}</span>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: {
      type: String,
      default: 'click here',
    },
    active: Boolean,
    styleAppButton: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style  scoped lang="scss">
@import '@/assets/sass/_variables.scss';

span{
  padding: 5px 25px;
  margin: 1em;
  text-transform: uppercase;
  color: $white;
  &.primary{
    background-color: $lightpurple;
  }
  &.secondary{
    background-color: $red;
  }
}
</style>
