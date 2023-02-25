<script setup lang="ts">
import Avatar from "../Avatar.vue";
import ButtonVue from "../buttons/Button.vue";
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
  <Transition name="comment">
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
              <ButtonVue
                color="danger"
                v-if="currentUser.username === comment?.user.username"
                @click="$emit('onDelete', comment?.id)"
              >
                <template #icon><IconDelete /></template>Delete</ButtonVue
              >
              <ButtonVue
                color="primary"
                v-if="currentUser.username !== comment?.user.username"
                @click="$emit('on-reply', comment?.id)"
              >
                <template #icon><IconReply /></template>Reply</ButtonVue
              >
              <ButtonVue
                color="primary"
                v-if="currentUser.username === comment?.user.username"
                @click="$emit('on-edit', comment?.id)"
              >
                <template #icon><IconEdit /></template>Edit</ButtonVue
              >
            </div>
          </div>

          <p class="comment-text">{{ comment?.content }}</p>
        </div>
      </div>

      <slot name="replies"></slot>
    </li>
  </Transition>
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
  emits: ["onDelete"],
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &-content {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  &-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;

    & > * {
      margin-right: 8px;
    }
  }

  &-actions {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 0px;
  }

  &-text {
    color: var(--c-grayish-blue);
  }

  .card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
}
.comment-enter-from {
  opacity: 0;
}

.comment-leave-to {
  opacity: 0;
}

.comment-enter-from .comment,
.comment-leave-to .comment {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
