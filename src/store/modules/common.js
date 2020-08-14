import Vue from 'vue'
// initial state
const state = () => ({
  toolbar_title: ""
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  changeToolbarTitle(state, title) {
    state.toolbar_title = title;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
