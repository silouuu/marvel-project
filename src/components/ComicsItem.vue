<template>
  <div class="comicsItem">
    <div class="heroImageComicsList">
      <div class="blocImageComicsList">
        <img class="ImageComicsList"
        v-bind:src="imgComics.path + '.' + imgComics.extension" alt="">
      </div>
    </div>
    <h4 class="titleImageComicsList">{{titleComics}}</h4>
  </div>
</template>

<script>

export default {
  name: 'ComicsItem',
  props: {
    comicsId: {
      type: Number,
      default: 0,
    },
    titleComics: String,
    imgComics: {
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
      // nameComics: 'Captain Marvel',
      // imageComics: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg',
    };
  },
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
@import '@/assets/sass/_generic.scss';

.blocImageComicsList {
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

.heroImageComicsList:hover {
  .ImageCharacterList {
    width: 130%;
    height: 130%;
  }
}

.ImageComicsList {
  width: 120%;
  height: 120%;
  background-size: 100%;
  background-position: center;
  position: relative;
  -webkit-transform: skew(-25rad) translateX(-5px);
  transform: skew(-25rad) translateX(-1px);
  transition: all 0.3s ease-in-out;
}

.linkImageComicsList {
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleImageComicsList {
  display: inline-block;
  width: 100%;
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
</style>
