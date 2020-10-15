<template>
  <div class="home">
    <section>
      <WelcomeSection />
    </section>
    <section id="charaters" class="flex flex-col items-center">
      <h2 class="h2Primary">Personnages</h2>
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
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.home {
  background-color: #1D1630 !important;
}

#charaters{
  padding: 5em;
}
.h2Primary {
  color: #FFFFFF;
  text-shadow: 0px 0px 10px #9100FF;
  margin-bottom: 50px;
}

</style>
