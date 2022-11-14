import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const state = () => ({
  starshipsList: [],
});

export const mutations = {
  starshipsPush(state, data) {
    const starships = [];
    starships.push(data);
    state.starshipsList = [...state.starshipsList, ...starships];
  },
};

export const actions = {
  starshipsRequest({ state, commit }) {
    if (state.starshipsList.length == 0) {
      function getStarships(link) {
        axios(link).then((response) => {
          response.data.results.forEach((e) => {
            commit("starshipsPush", e);
          });
          if (response.data.next) {
            getStarships(response.data.next);
          }
        });
      }
      getStarships("https://swapi.dev/api/starships");
    }
  },
};

export const getters = {};
