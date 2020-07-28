import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    profiles: [],
  },

  getters: {
    getProfilesByIds: state  => ids => {
      return state.profiles.filter(profile => ids.find(id => profile.id === id));
    },
  },

  mutations: {

    ADD_PROFILES: (state, payload) => {
      state.profiles.push(...payload);
    },

  },

  actions: {
    ADD_PROFILES: async (context, payload) => {
      context.commit('ADD_PROFILES', payload);
    },
  },
  modules: {
  }
  
})
