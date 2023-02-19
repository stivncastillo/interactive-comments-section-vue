<template>
  <div class="counter">
    <button class="counter-action" @click="increase">+</button>
    <span>{{ number }}</span>
    <button class="counter-action" @click="decrease">-</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    number: Number,
  },
  methods: {
    increase() {
      this.$emit("onIncrease");
    },
    decrease() {
      this.$emit("onDecrease");
    },
  },
};
</script>

<style lang="scss" scoped>
.counter {
  background-color: var(--c-light-gray);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;

  &-action {
    border: none;
    background-color: transparent;
    color: var(--c-light-grayish-blue);
    padding: 6px 12px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: var(--c-moderate-blue);
    }
  }

  span {
    font-weight: 500;
    font-size: 14px;
    color: var(--c-moderate-blue);
  }
}
</style>
