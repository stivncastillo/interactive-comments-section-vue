<template>
  <Modal :show="show">
    <template #header>
      <h3>Delete comment</h3>
    </template>
    <template #body>
      <p class="text-body text-muted">
        Are you sure you want delete this comment? This remove the comment and
        can't be undone.
      </p>
    </template>

    <template #footer>
      <div class="footer">
        <ButtonVue
          color="secondary"
          size="lg"
          block
          fill
          @click="$emit('onCancel')"
          >NO, CANCEL</ButtonVue
        >
        <ButtonVue
          color="danger"
          size="lg"
          block
          fill
          @click="$emit('onDelete')"
          >YES, DELETE</ButtonVue
        >
      </div>
    </template>
  </Modal>
</template>

<script lang="ts">
import Modal from "./Modal.vue";
import ButtonVue from "../buttons/Button.vue";

export default {
  components: { Modal, ButtonVue },
  props: {
    show: Boolean,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 500;
  font-size: 22px;
}
.footer {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.text-body {
  font-size: 14px;
  font-weight: 400;
}
</style>
