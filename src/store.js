import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import comments from "./modules/comments.module";

axios.defaults.baseURL = "https://5cbef81d06a6810014c66193.mockapi.io/api";
Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    comments
  }
});
