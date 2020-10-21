<template>
  <div class="filters">
    <p class="filtersTitle flex">Filter by teams & groups</p>
    <div class="flex-1">
      <ul class="filters-wrapper flex py-5">
        <li v-for="filter in filters" :key="filter.name">
          <Button :msg="filter.name" styleAppButton="primary"/>
        </li>
      </ul>
    </div>

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
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.filters{
  width: 100%;
  max-width: 600px;
  margin: auto;
  .filtersTitle {
    display: flex;
    align-content: flex-start;
    text-align: left;
    font: italic normal normal 14px/17px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
  }
  .filters-wrapper{
    margin: 0 -15px;
  }
}

</style>
