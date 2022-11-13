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
  starshipsRequest({ commit }) {
    let th = this;
    function deneme(link) {
      return axios(link).then((response) => {
        response.data.results.forEach((e) => {
          commit("starshipsPush", e);
        });
        if (response.data.next) {
          deneme(response.data.next);
        }
      });
    }
    deneme("https://swapi.dev/api/starships");
  },
};

export const getters = {};
