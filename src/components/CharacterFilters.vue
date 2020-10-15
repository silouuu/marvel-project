<template>
  <div class="filters">
    <h3>Filter by teams & groups</h3>
    <ul class="filters-wrapper flex p-5">
      <li v-for="filter in filters" :key="filter.name">
        <Button :msg="filter.name" styleAppButton="primary"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/commons/AppButton.vue';

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
<style  scoped lang="scss">
.filters-wrapper{
}
</style>
