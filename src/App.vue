<script setup lang="ts">
import { mapActions, mapState } from "vuex";
import Comment from "./components/comments/Comment.vue";
import CommentForm from "./components/comments/CommentForm.vue";
import DeleteModal from "./components/Modal/DeleteModal.vue";
import type { Comment as CommentType } from "./types";
</script>

<template>
  <main class="main-container">
    <!-- Comments -->
    <section class="comments-container">
      <ul class="comments">
        <Comment
          v-for="comment in comments"
          :comment="comment"
          v-bind:key="comment.id"
          @onDelete="onDelete"
          @onReply="handleReplyCommentForm"
        >
          <template #replies>
            <ul class="replies">
              <Comment
                v-for="replies in comment.replies"
                :comment="replies"
                v-bind:key="replies.id"
                @onDelete="onDelete"
                @onReply="handleReplyCommentForm"
              />
            </ul>
          </template>
        </Comment>
      </ul>
    </section>

    <section class="new-comment-form">
      <CommentForm :current-user="currentUser" @on-save="onAddComment" />
    </section>

    <DeleteModal
      :show="showModal"
      @on-cancel="onCancelDelete"
      @on-delete="handleShowDeleteModal"
    />
  </main>
</template>

<script lang="ts">
export default {
  computed: {
    ...mapState("commentsModule", ["comments"]),
    ...mapState("authModule", ["currentUser"]),
  },
  components: { DeleteModal },
  data() {
    return {
      showModal: false,
      commentIdToDelete: 0,
    };
  },
  methods: {
    ...mapActions("commentsModule", [
      "deleteCommentById",
      "addComment",
      "addReplyCommentForm",
    ]),
    onCancelDelete() {
      this.showModal = false;
      this.commentIdToDelete = 0;
    },
    handleShowDeleteModal() {
      this.deleteCommentById(this.commentIdToDelete);
      this.showModal = false;
      this.commentIdToDelete = 0;
    },
    onDelete(id: number) {
      this.showModal = true;
      this.commentIdToDelete = id;
    },
    handleReplyCommentForm(id: number) {
      this.addReplyCommentForm(id);
    },
    onAddComment(comment: CommentType) {
      this.addComment(comment);
    },
  },
};
</script>

<style scoped></style>
