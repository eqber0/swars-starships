<template>
  <div class="container">
    <h1 style="color: #f8f8f8">{{ starships }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      routeId: this.$route.params.detailPage.replace("-", " "),
      starships: [],
    };
  },

  mounted() {
    console.log(this.routeId);
    this.$store.dispatch("starshipsRequest");
    axios
      .get(`https://swapi.dev/api/starships`, {
        params: {
          search: this.routeId,
        },
      })
      .then((res) => {
        if (res.data.results.name == this.routeId) {
          console.log("aa");
        }
        this.starships = res;
      });
  },
  computed: {
    starshipsList() {
      return this.$store.state.starshipsList;
    },
  },
};
</script>
