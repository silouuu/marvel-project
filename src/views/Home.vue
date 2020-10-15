<template>
  <div class="home">
    <section>
      <Visuel />
    </section>
    <section>
      <h2>Characters</h2>
      <Filters/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Visuel from '@/components/Visuel.vue';
import Filters from '@/components/Filters.vue';

export default {
  name: 'Home',
  components: {
    Visuel,
    Filters,
  },
};
</script>
