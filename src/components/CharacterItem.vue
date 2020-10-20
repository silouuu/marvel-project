<template>
  <div class="characterItem">
    <div class="heroImageCharacterList">
      <div class="blocImageCharacterList">
        <img class="ImageCharacterList"
          v-bind:src="imgCharacter.path + '.' + imgCharacter.extension" alt="{{nameCharacter}}">
      </div>
    </div>
    <h4 class="titleImageCharacterList">{{nameCharacter}}</h4>
  </div>
</template>

<script>
export default {
  name: 'CharacterItem',
  props: {
    characterId: {
      type: Number,
      default: 0,
    },
    nameCharacter: String,
    imgCharacter: {
      type: Object,
      default: function u() {
        return {
          extention: 'jpg',
          path: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04',
        };
      },
    },
  },
  data() {
    return {
      // nameCharacter: 'Captain Marvel',
      // imageCharacter: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg',

    };
  },

};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.characterItem{
  width: 155px;
  margin-bottom: 1em;
  .heroImageCharacterList{
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
      .ImageCharacterList {
        width: 120%;
        height: 120%;
        background-size: 100%;
        background-position: center;
        position: relative;
        -webkit-transform: skew(-25rad) translateX(-5px);
        transform: skew(-25rad) translateX(-1px);
        transition: all 0.3s ease-in-out;
      }
    }
    &:hover {
      .ImageCharacterList {
        width: 130%;
        height: 130%;
      }
    }
  }
  .titleImageCharacterList {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: white;
    padding: 1em 0.5em;
    margin-left: -17%;
    border-radius: .3em;
    font-size: 1rem;
    line-height: 1.25em;
    text-transform: uppercase;
    overflow-wrap: break-word;
    font-family: Roboto;
    font-weight: 400;
  }
}

.linkImageCharacterList {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
