<script setup lang="ts">
import { mapState } from "vuex";
import Comment from "./components/comments/Comment.vue";
import CommentForm from "./components/comments/CommentForm.vue";
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
        >
          <template #replies>
            <ul class="replies">
              <Comment
                v-for="replies in comment.replies"
                :comment="replies"
                v-bind:key="replies.id"
              />
            </ul>
          </template>
        </Comment>
      </ul>
    </section>

    <section class="new-comment-form">
      <CommentForm />
    </section>
  </main>
</template>

<script lang="ts">
export default {
  computed: {
    ...mapState("commentsModule", ["comments"]),
  },
};
</script>

<style scoped></style>
