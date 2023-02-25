<script setup lang="ts">
import { useSlots } from "vue";
const slots = useSlots();
</script>

<template>
  <button
    class="container"
    :class="{
      primary: isPrimary,
      secondary: isSecondary,
      danger: isDanger,
      [sizeClass]: size,
      fill,
      block: block,
    }"
  >
    <i v-if="slots.icon">
      <slot name="icon"> </slot>
    </i>
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    color: { type: String, default: "primary" },
    fill: { type: Boolean, default: false },
    size: { type: String, default: "md" },
    block: Boolean,
  },
  computed: {
    isPrimary() {
      return this.color === "primary";
    },
    isSecondary() {
      return this.color === "secondary";
    },
    isDanger() {
      return this.color === "danger";
    },
    sizeClass() {
      return `size-${this.size}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
}
.container > span {
  font-weight: 700;
}

.primary {
  background-color: transparent;
  color: var(--c-moderate-blue);
}

.secondary {
  background-color: transparent;
  color: var(--c-grayish-blue);
}

.danger {
  background-color: transparent;
  color: var(--c-soft-red);
}

.fill.primary {
  background-color: var(--c-moderate-blue);
  color: var(--c-white);
}
.fill.secondary {
  background-color: var(--c-grayish-blue);
  color: var(--c-white);
}
.fill.danger {
  background-color: var(--c-soft-red);
  color: var(--c-white);
}

.size-md {
  padding: 6px 10px;
  border-radius: 4px;
}

.size-lg {
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 12px;
}

.block {
  display: block;
  width: 100%;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  margin-right: 4px;
}
</style>
