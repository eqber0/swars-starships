import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const state = () => ({
  peoples: [],
});

export const mutations = {
  peoplePush(state, data) {
    const people = [];
    people.push(data);
    state.peoples = [...state.peoples, ...people];
  },
};

export const actions = {
  peopleRequest({ commit }) {
    let th = this;
    function deneme(link) {
      return axios(link).then((response) => {
        response.data.results.forEach((e) => {
          commit("peoplePush", e);
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
