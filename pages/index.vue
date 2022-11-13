<template>
  <div class="container">
    <div class="row g-4 g-md-5">
      <NuxtLink
        class="starship-card col-12 col-md-6 col-lg-4 col-xl-3"
        :to="{
          path: `/starships/${starships.name.replace(/ /g, '-').toLowerCase()}`,
        }"
        v-for="(starships, index) in starshipsList"
        :key="index"
      >
        <div class="starship-card__image">
          <img
            :src="
              require('~/assets/' +
                starships.name.replace(/ /g, '-').toLowerCase() +
                '.png')
            "
            alt=""
          />
        </div>
        <div class="starship-card__title">NAME: {{ starships.name }}</div>
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
    this.$store.dispatch("starshipsRequest");
  },
  computed: {
    starshipsList() {
      return this.$store.state.starshipsList;
    },
  },
};
</script>

<style lang="scss">
.starship-card {
  &__image {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
