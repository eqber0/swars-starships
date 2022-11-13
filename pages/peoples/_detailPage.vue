<template>
  <div class="container">
    <h1>{{ people }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      routeId: this.$route.params.detailPage,
      people: [],
    };
  },

  mounted() {
    this.$store.dispatch("peopleRequest");
    axios.get(`https://swapi.dev/api/people/${this.routeId}`).then((res) => {
      console.log(res);
      this.people = res;
    });
  },
  computed: {
    peopleList() {
      return this.$store.state.peoples;
    },
  },
};
</script>
