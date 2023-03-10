import Vue from "vue";
import Vuex from "vuex";
import getters from './getters.js';
import actions from './actions.js';
import state from './state.js';
import mutations from './mutations.js';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  mutations,
  actions,
  getters,
});
