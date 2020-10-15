<template>
  <div>
    <ul>
      <li>
        <CharacterItem />
      </li>
    </ul>
  </div>
</template>

<script>
import CharacterItem from '@/components/CharacterItem.vue';

export default {
  name: 'CharacterList',
  components: {
    CharacterItem,
  },
};
</script>
<style  scoped lang="scss">

</style>
