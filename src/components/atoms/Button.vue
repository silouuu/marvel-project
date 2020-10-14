<template>
  <a class="btn" href="{{ href }}">{{ msg }}</a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    level: {
      type: Number,
    },
    href: String,
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
