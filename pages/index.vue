<template>
  <div class="container">
    <h1>Index Page</h1>
    <div class="row g-4 g-md-5">
      <NuxtLink
        class="col-12 col-md-6 col-lg-4 col-xl-3"
        :to="{
          path: `/peoples/${index + 1}`,
        }"
        v-for="(people, index) in peopleList"
        :key="index"
      >
        {{ people.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    this.$store.dispatch("peopleRequest");
  },
  computed: {
    peopleList() {
      return this.$store.state.peoples;
    },
  },
};
</script>
