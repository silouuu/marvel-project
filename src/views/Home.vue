<template>
  <div class="home">
    <Visuel />
  </div>
</template>

<script>
// @ is an alias to /src
import Visuel from '@/components/Visuel.vue';

export default {
  name: 'Home',
  components: {
    Visuel,
  },
};
</script>
