<template>
  <span class="btn">{{ msg }}</span>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    active: Boolean,
    level: {
      type: Number,
    },
  },
  // TO DO fct class suivant level ?
};
</script>

<style  scoped lang="scss">
@import '@/assets/sass/_variables.scss';

.btn{
  padding: 5px 25px;
  margin: 1em;
  text-transform: uppercase;
  background-color: $lightpurple;
  color: $white;
}
</style>
