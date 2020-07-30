import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    profiles: [],
    selectedProfile: null,
    showProfile: false,

  },

  getters: {

    getProfilesByIds: state  => ids => {
      return state.profiles.filter(profile => ids.find(id => profile.id === id));
    },

    getMessagesByIds: state => ids =>{
      return state.messages.filter(message => ids.find(id => message.id ===id));
    },

    getSelectedProfile: state => {
      return state.selectedProfile;
    },

    getShowProfile: state => {
      return state.showProfile;
    },

  },

  mutations: {

    addProfiles: (state, payload) => {
      state.profiles.push(...payload);
    },

    setSelectedProfile: (state, payload) => {
      state.selectedProfile = payload;
    },

    setShowProfile: (state, payload) => {
      state.showProfile = payload;
    },

  },

  actions: {

    addProfiles: async (context, payload) => {
      context.commit('addProfiles', payload);
    },

    setSelectedProfile: async (context, payload) => {
      context.commit('setSelectedProfile', payload);
    },

    hideProfile: async (context) => {
      context.commit('setShowProfile', false);
    },

    showProfile: async (context) => {
      context.commit('setShowProfile', true);
    },
  },

  modules: {
  }
  
})
