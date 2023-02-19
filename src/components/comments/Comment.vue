<script setup lang="ts">
import Avatar from "../Avatar.vue";
import ButtonIcon from "../buttons/ButtonIcon.vue";
import IconDelete from "../icons/IconDelete.vue";
import IconReply from "../icons/IconReply.vue";
import CommentCounter from "./CommentCounter.vue";
import Badge from "../Badge.vue";
import type { PropType } from "vue";
import type { Comment as CommentType } from "../../types";
</script>

<template>
  <li class="comment">
    <div class="card">
      <CommentCounter />

      <div class="comment-content">
        <div class="comment-header">
          <Avatar size="sm" :image="`images/avatars/${imageName}`" />

          <h2 class="h5">{{ comment?.user.username }} <Badge>you</Badge></h2>
          <span class="text-sm text-muted">1 month ago</span>

          <div class="comment-actions">
            <ButtonIcon color="danger">
              <template #icon><IconDelete /></template>Delete</ButtonIcon
            >
            <ButtonIcon color="primary">
              <template #icon><IconReply /></template>Reply</ButtonIcon
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
  },
  mounted() {
    console.log(this.$props.comment);
  },
  // computed: {},
};
</script>
