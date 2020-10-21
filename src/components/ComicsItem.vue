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

.comicsItem{
  width: 155px;
  margin-bottom: 1em;
}
.blocImageComicsList {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 120px;
  min-height: 220px;
  height: auto;
}

.heroImageComicsList:hover {
  .ImageCharacterList {
    width: 130%;
    height: 130%;
  }
}

.ImageComicsList {
  width: 100%;
  height: autp;
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
