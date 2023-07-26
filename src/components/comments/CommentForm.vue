<script setup lang="ts">
import type { User } from "@/types";
import Avatar from "../Avatar.vue";
import ButtonIcon from "../buttons/Button.vue";
import type { PropType } from "vue";
</script>

<template>
  <div class="new-comment card">
    <div class="avatar-container">
      <Avatar size="md" :image="`images/avatars/${imageName}`" />
    </div>

    <div class="comment-form">
      <textarea
        name="comment"
        id="comment"
        rows="3"
        v-model="commentText"
      ></textarea>

      <ButtonIcon
        color="primary"
        fill
        size="lg"
        @click="handleSave"
        :disabled="!Boolean(commentText)"
        >{{ actionText }}</ButtonIcon
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      commentText: "",
    };
  },
  methods: {
    handleSave() {
      if (this.commentText !== "") {
        this.$emit("onSave", {
          content: this.commentText,
          createdAt: "right now",
          score: 0,
          user: this.currentUser,
        });
      }
    },
  },
  props: {
    currentUser: {
      type: Object as PropType<User>,
      required: true,
    },
    actionText: { type: String, default: "SEND" },
  },
  computed: {
    imageName() {
      const image = this.currentUser.image.png;
      return image?.substring(image?.lastIndexOf("/") + 1) ?? "";
    },
  },
  emits: ["onSave"],
};
</script>

<style lang="scss" scoped>
.new-comment {
  display: flex;
  flex-direction: row;
}
.avatar-container {
  margin-right: 16px;
}
.comment-form {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;

  & > textarea {
    width: 100%;
    margin-right: 16px;
    border-radius: 4px;
    border: 1px solid var(--c-light-gray);
    padding: 16px;
    resize: none;
    overflow: hidden;

    &:active,
    &:focus,
    &:focus-visible {
      border: 2px solid var(--c-moderate-blue);
      outline: none;
    }
  }
}
</style>
