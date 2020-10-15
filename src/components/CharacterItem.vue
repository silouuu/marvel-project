<template>
  <div class="characterItem">
    <div class="heroImageCharacterList">
      <div class="blocImageCharacterList">
        <a class="linkImageCharacterList" href="https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg">
          <img class="ImageCharacterList" src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg" alt="">
        </a>
      </div>
    </div>
    <h4 class="titleImageCharacterList">{{ nameCharacter }}</h4>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CharacterItem',
  props: {
    CharacterId: Number,
  },
  data() {
    return {
      nameCharacter: 'Captain Marvel',
      imageCharacter: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg',

    };
  },

};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.blocImageCharacterList {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 105px;
  height: 97px;
  border: 3px solid #f6f6f6;
  overflow: hidden;
  border-radius: 7px;
  -webkit-transform: skew(25rad);
  transform: skew(25rad);
}

.heroImageCharacterList:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
  transition-duration: 300ms;
  transition-property: fill,color;
}

.ImageCharacterList {
  width: 120%;
  height: 120%;
  background-size: 100%;
  background-position: center;
  position: relative;
  -webkit-transform: skew(-25rad) translateX(-5px);
  transform: skew(-25rad) translateX(-1px);
}

.linkImageCharacterList {
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleImageCharacterList {
  display: inline-block;
  font-family: Roboto,Helvetica Neue,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  color: #212529;
  padding: .25em .5em;
  margin-left: -17%;
  border-radius: .3em;
  font-size: 1rem;
  line-height: 1.25em;
  text-transform: uppercase;
}
</style>
