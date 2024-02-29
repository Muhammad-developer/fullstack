import Vue from "vue";
import Vuex from "vuex";
// import auth from './auth'
import axios from "axios";

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    message: null,
    api_url: process.env.VUE_APP_API_URL,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    setMessage(state, message) {
      state.message = message;
    },
    clearError(state) {
      state.error = null;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  getters: {
    error: (s) => s.error,
    message: (s) => s.message,
  },
  actions: {
    async getTasks({ commit }) {
      try {
        const item = await axios.get(`${process.env.VUE_APP_API_URL}tasks`, {
          headers: {
            Accept: "application/json",
          },
        });
        return item.data.data;
      } catch (e) {
        //
      }
    },

    async setTask({ commit }, payload) {
      try {
        const item = await axios.post(`${process.env.VUE_APP_API_URL}tasks`, {
          name: payload.name,
          status: payload.status,
        });
        return item.data.data;
      } catch (e) {
        //
      }
    },

    async getFilterByDate({ commit }, payload) {
      try {
        const item = await axios.post(
          `${process.env.VUE_APP_API_URL}sortByDate/${payload.from}/${payload.to}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        return item.data.data;
      } catch (e) {
        //
      }
    },

    async getFilterByStatus({ commit }, payload) {
      try {
        const item = await axios.post(
          `${process.env.VUE_APP_API_URL}sortByStatus/${payload.text}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        return item.data.data;
      } catch (e) {
        //
      }
    },

    async getTasksLastId({ commit }, payload) {
      try {
        const item = await axios.get(`${process.env.VUE_APP_API_URL}lastId`, {
          headers: {
            Accept: "application/json",
          },
        });
        return item.data;
      } catch (e) {
        //
      }
    },
  },
});
