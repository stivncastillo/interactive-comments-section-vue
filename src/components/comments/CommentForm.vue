<script setup lang="ts">
import Avatar from "../Avatar.vue";
import ButtonIcon from "../buttons/ButtonIcon.vue";
</script>

<template>
  <div class="new-comment card">
    <div class="avatar-container">
      <Avatar size="md" />
    </div>

    <div class="comment-form">
      <textarea name="comment" id="comment" rows="3"></textarea>

      <ButtonIcon color="primary" fill size="lg">SEND</ButtonIcon>
    </div>
  </div>
</template>

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
