<template>
  <div class="home">
    <section>
      <WelcomeSection />
    </section>
    <section id="charaters" class="flex flex-col items-center">
      <h2>Characters</h2>
      <CharacterFilters/>
      <CharacterList/>
    </section>
  </div>
</template>

<script>
import WelcomeSection from '@/components/WelcomeSection.vue';
import CharacterFilters from '@/components/CharacterFilters.vue';
import CharacterList from '@/components/CharacterList.vue';
// import axios from "axios";

export default {
  name: 'Home',
  components: {
    WelcomeSection,
    CharacterFilters,
    CharacterList,
  },
};
</script>
<style  scoped lang="scss">
#charaters{
  padding: 5em;
}
</style>
