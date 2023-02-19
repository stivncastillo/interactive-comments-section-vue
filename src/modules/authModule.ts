import type { AuthState } from "./../types.d";

import data from "../data/data.json";

export const authModule = {
  namespaced: true,
  state: () => ({
    currentUser: data.currentUser,
    commentsScored: [],
  }),
  getters: {
    isCommentSocred: (state: AuthState) => (id: number) => {
      return state.commentsScored.find((num) => num === id);
    },
  },
  mutations: {
    scoreComment(state: AuthState, { id }: { id: number }) {
      if (!state.commentsScored.includes(id)) {
        state.commentsScored.push(id);
      }
    },
    removeScoreComment(state: AuthState, { id }: { id: number }) {
      state.commentsScored = state.commentsScored.filter((num) => num !== id);
    },
  },
  actions: {
    // @ts-ignore
    scoreComment(context, id) {
      context.commit("scoreComment", { id });
    },
    // @ts-ignore
    removeScoreComment(context, id) {
      context.commit("removeScoreComment", { id });
    },
  },
};
