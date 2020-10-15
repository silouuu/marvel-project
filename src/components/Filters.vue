<template>
  <div class="filters">
    <h3>Filter by teams & groups</h3>
    <ul>
      <li v-for="filter in filters" :key="filter.name">
        <Button :msg="filter.name"/>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/atoms/Button.vue';

export default {
  name: 'Filters',
  components: {
    Button,
  },
  data() {
    return {
      filters: [
        { name: 'Avangers' },
        { name: 'X-men' },
        { name: 'Fantastic 4' },
      ],
    };
  },
};

</script>
