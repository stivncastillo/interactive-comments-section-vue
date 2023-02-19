<template>
  <span class="badge" :class="{ 'badge-primary': color === 'primary' }">
    <slot />
  </span>
</template>

<script lang="ts">
export default {
  props: {
    color: { type: String, default: "primary" },
  },
  // computed: {},
};
</script>

<style lang="scss" scoped></style>
