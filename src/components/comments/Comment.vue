<script setup lang="ts">
import Avatar from "../Avatar.vue";
import ButtonIcon from "../buttons/ButtonIcon.vue";
import IconDelete from "../icons/IconDelete.vue";
import IconReply from "../icons/IconReply.vue";
import IconEdit from "../icons/IconEdit.vue";
import CommentCounter from "./CommentCounter.vue";
import Badge from "../Badge.vue";
import type { PropType } from "vue";
import type { Comment as CommentType } from "../../types";
import { mapActions, mapState } from "vuex";
</script>

<template>
  <li class="comment">
    <div class="card">
      <CommentCounter
        :number="comment?.score"
        @on-increase="increase(comment?.id ?? 0)"
        @on-decrease="decrease(comment?.id ?? 0)"
      />

      <div class="comment-content">
        <div class="comment-header">
          <Avatar size="sm" :image="`images/avatars/${imageName}`" />

          <h2 class="h5">
            {{ comment?.user.username }}
            <Badge v-if="currentUser.username === comment?.user.username"
              >you</Badge
            >
          </h2>
          <span class="text-sm text-muted">{{ comment?.createdAt }}</span>

          <div class="comment-actions">
            <ButtonIcon
              color="danger"
              v-if="currentUser.username === comment?.user.username"
            >
              <template #icon><IconDelete /></template>Delete</ButtonIcon
            >
            <ButtonIcon
              color="primary"
              v-if="currentUser.username !== comment?.user.username"
            >
              <template #icon><IconReply /></template>Reply</ButtonIcon
            >
            <ButtonIcon
              color="primary"
              v-if="currentUser.username === comment?.user.username"
            >
              <template #icon><IconEdit /></template>Edit</ButtonIcon
            >
          </div>
        </div>

        <p class="comment-text">{{ comment?.content }}</p>
      </div>
    </div>

    <slot name="replies"></slot>
  </li>
</template>

<script lang="ts">
export default {
  name: "Comment",
  props: {
    comment: Object as PropType<CommentType>,
  },
  computed: {
    imageName() {
      const image = this.comment?.user.image.png;
      return image?.substring(image?.lastIndexOf("/") + 1) ?? "";
    },
    ...mapState("authModule", ["currentUser"]),
  },
  methods: {
    ...mapActions("commentsModule", ["increaseScore", "decreaseScore"]),
    increase(id: number) {
      this.increaseScore(id);
    },
    decrease(id: number) {
      this.decreaseScore(id);
    },
  },
};
</script>
