import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    profiles: [],
    selectedProfile: null,
    showProfile: false,

    currentUserId: 15,

    selectedChannelId: null,



  },

  getters: {

    getProfilesByIds: state  => ids => {
      return state.profiles.filter(profile => ids.find(id => profile.id === id));
    },

    getSelectedProfile: state => {
      return state.selectedProfile;
    },

    getAuthor: state => {
      return state.currentUserId;
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

    addMessages: (state, payload) =>{
      state.messages.push(...payload);
    }

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

    addMessages: async (context, payload) =>{
      context.commit('AddMessages', payload);
    }

  },

  modules: {
  }
  
})
