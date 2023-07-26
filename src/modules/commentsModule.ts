import type { CommentsState } from "./../types.d";
import data from "../data/data.json";
import {
  findObjectById,
  deleteComment,
  addComment,
  NEW_COMMENT,
} from "@/helpers/commentsHelpers";

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
    deleteCommentById(state: CommentsState, { id }: { id: number }) {
      deleteComment(state.comments, id);
    },
    addReplyCommentForm(state: CommentsState, { id }: { id: number }) {
      state.comments = addComment(state.comments, id, NEW_COMMENT);
    },
    addComment(
      state: CommentsState,
      { comment, commentId }: { comment: Comment; commentId: number }
    ) {
      if (!commentId) {
        state.comments.push({ id: new Date().getTime(), ...comment });
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
    // @ts-ignore
    deleteCommentById(context, id) {
      context.commit("deleteCommentById", { id });
    },
    // @ts-ignore
    addComment(context, comment) {
      context.commit("addComment", { comment });
    },
    // @ts-ignore
    addReplyCommentForm(context, id) {
      context.commit("addReplyCommentForm", { id });
    },
  },
};
