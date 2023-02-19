<template>
  <div
    class="avatar"
    :class="{ md: size === 'md', lg: size === 'lg', sm: size === 'sm' }"
  >
    <img :src="image" alt="Profile" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Comment",
  props: {
    image: String,
    size: {
      type: String,
      default: "md",
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 100%;
  }
  &.md {
    width: 40px;
  }
  &.sm {
    width: 30px;
  }
  &.lg {
    width: 50px;
  }
}
</style>
