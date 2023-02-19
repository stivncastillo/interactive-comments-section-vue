import type { CommentsState } from "./../types.d";
import data from "../data/data.json";
import { findObjectById } from "@/helpers/commentsHelpers";

export const commentsModule = {
  namespaced: true,
  state: () => ({
    comments: data.comments,
  }),
  mutations: {
    increaseScore(state: CommentsState, { id }: { id: number }) {
      const commentObj = findObjectById(state.comments, id);
      if (commentObj) {
        commentObj.score += 1;
      }
    },
    decreaseScore(state: CommentsState, { id }: { id: number }) {
      const commentObj = findObjectById(state.comments, id);
      if (commentObj && commentObj.score > 0) {
        commentObj.score -= 1;
      }
    },
  },
  actions: {
    // @ts-ignore
    increaseScore(context, id) {
      if (!context.rootGetters["authModule/isCommentSocred"](id)) {
        context.commit("increaseScore", { id });
        context.dispatch("authModule/scoreComment", id, { root: true });
      }
    },
    // @ts-ignore
    decreaseScore(context, id) {
      if (context.rootGetters["authModule/isCommentSocred"](id)) {
        context.commit("decreaseScore", { id });
        context.dispatch("authModule/removeScoreComment", id, { root: true });
      }
    },
  },
};
