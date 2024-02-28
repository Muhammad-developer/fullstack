import Vue from 'vue'
import Vuex from 'vuex'
// import auth from './auth'
import axios from "axios";

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    message: null,
    api_url: process.env.VUE_APP_API_URL,
    token: localStorage.getItem('user-token') || '',
    uuid: '',
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    setMessage(state, message) {
      state.message = message
    },
    clearError(state) {
      state.error = null
    },
    clearMessage(state) {
      state.message = null
    },
    setToken(state, token) {
      state.token = token
    }
  },
  getters: {
    error: s => s.error,
    message: s => s.message
  },
  actions: {

    async getTasks({commit}) {
      try {
        const item = await axios
            .get(`${process.env.VUE_APP_API_URL}tasks`, {
              headers: {
                'Accept': 'application/json'
              }
            })
        return item.data.data
      } catch (e) {
        //
      }
    }
  }
})
