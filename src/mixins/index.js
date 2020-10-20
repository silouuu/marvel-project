export default {
  data() {
    return {

    };
  },
  methods: {
    text50(string) {
      return `${string.substring(0, 8)} ...`;
    },
  },
  mounted() {
    console.log('hook mounted venant de la mixin');
  },
};
