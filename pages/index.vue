<template>
  <main>
    <div class="container">
      <div class="row g-4 g-md-5">
        <div
          class="col12 col-md-6 col-lg-4 col-xl-3"
          v-for="(starships, index) in starshipsList"
          :key="index"
        >
          <NuxtLink
            class="starship-card"
            :to="{
              path: `/starships/${starships.name
                .replace(/ /g, '-')
                .toLowerCase()}`,
            }"
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
            <div
              class="starship-card__title txt txt--rem28 txt--font400 c-white"
            >
              {{ starships.name }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",
  data() {
    return {
      loading: true,
    };
  },

  created() {
    this.$store.dispatch("starshipsRequest");
  },
  computed: {
    ...mapState(["starshipsList"]),
  },
};
</script>

<style lang="scss">
.starship-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid var(--c-white);
  border-radius: 0.7rem;
  padding: 3rem;
  transition: var(--transition);
  &__image {
    height: 40rem;
    transition: var(--transition);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__title {
    text-align: center;
    position: relative;
    padding-bottom: 1rem;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.2rem;
      width: 0;
      background: var(--c-primary);
      box-shadow: 0 0 1rem 0.5rem var(--c-primary);
      transition: var(--transition);
      opacity: 0;
    }
  }
  &:hover {
    border-color: var(--c-primary);
    .starship-card {
      &__image {
        transform: scale(0.9);
      }
      &__title {
        &::after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
