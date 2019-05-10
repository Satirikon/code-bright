import Vue from "vue";

const state = { list: [], active: null };
const mutations = {
  SET_COMMENTS: (state, payload) => {
    state.list = payload;
  },
  ADD_COMMENT: (state, payload) => {
    state.list.push(payload);
  },
  SET_ACTIVE: (state, payload) => {
    state.active = payload;
  },
  DELETE_COMMENT: (state, id) => {
    state.list = state.list.filter(comment => comment.id !== id);
  },
  UPDATE_COMMENT: (state, payload) => {
    const index = state.list.findIndex(comment => comment.id === payload.id);
    if (index) state[index] = Object.assign(state[index], payload);
  }
};
const actions = {
  GET_COMMENTS: async context => {
    try {
      const { data } = await Vue.axios.get("/comments");
      context.commit("SET_COMMENTS", data);
    } catch (e) {
      console.error(e);
    }
  },
  ADD_COMMENT: async (context, payload) => {
    try {
      const data = { ...payload, created_at: Date.now() };
      await Vue.axios.post("/comments", data);
      context.commit("ADD_COMMENT", data);
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  GET_COMMENT: async (context, id) => {
    try {
      const { data } = await Vue.axios.get(`/comments/${id}`);
      context.commit("SET_ACTIVE", data);
    } catch (e) {
      console.error(e);
    }
  },
  DELETE_COMMENT: async (context, id) => {
    try {
      await Vue.axios.delete(`/comments/${id}`);
      context.commit("DELETE_COMMENT", id);
    } catch (e) {
      console.error(e);
    }
  },
  UPDATE_COMMENT: async (context, payload) => {
    try {
      await Vue.axios.put(`/comments/${payload.id}`);
      context.commit("UPDATE_COMMENT", payload);
    } catch (e) {
      console.error(e);
    }
  }
};

export default {
  state,
  mutations,
  actions
};
