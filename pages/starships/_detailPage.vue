<template>
  <div class="container">
    <div class="starship-detail row g-4 g-md-5">
      <div class="col-12 col-lg-6">
        <div class="starship-detail__image">
          <img
            :src="
              require('~/assets/' +
                this.$route.params.detailPage.toLowerCase() +
                '.png')
            "
            alt=""
          />
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="starship-detail__content">
          <h1
            class="starship-detail__content-title txt txt--rem36 txt--font700 c-white"
          >
            {{ starship.name }}
          </h1>
          <div class="starship-detail__content-info mt-5 c-white">
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Model:</strong> {{ starship.model }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Starship Class:</strong> {{ starship.starship_class }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Manufacturer:</strong> {{ starship.manufacturer }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Cost:</strong> {{ starship.cost_in_credits }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Length:</strong> {{ starship.length }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Crew:</strong> {{ starship.crew }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Passengers:</strong> {{ starship.passengers }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Cargo Capacity:</strong> {{ starship.cargo_capacity }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Duration:</strong> {{ starship.consumables }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>Hyperdrive Rating:</strong>
              {{ starship.hyperdrive_rating }}
            </div>
            <div class="starship-detail__content-info__item txt--rem24">
              <strong>MGLT:</strong> {{ starship.MGLT }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      routeId: this.$route.params.detailPage,
      starship: [],
    };
  },

  created() {
    this.$store.dispatch("starshipsRequest");
    axios
      .get(
        `https://swapi.dev/api/starships/?search=${this.routeId
          .split("-")
          .join("+")}`
      )
      .then((res) => {
        console.log(res);
        this.starship = res.data.results[0];
        console.log(this.starship.name);
      })
      .finally(() => {
        setTimeout(() => {
          commit("hidePreloader", true);
        }, 1000);
      });
  },

  computed: {
    ...mapState(["hidePreloader"]),

    starshipsList() {
      return this.$store.state.starshipsList;
    },
  },
};
</script>

<style lang="scss">
.starship-detail {
  &__image {
    width: 100%;
    height: 60rem;
    border: 0.1rem solid var(--c-white);
    border-radius: 2.8rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__content {
  }
}
</style>
