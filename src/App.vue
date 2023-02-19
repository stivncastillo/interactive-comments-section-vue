<script setup lang="ts">
import IconReply from "./components/icons/IconReply.vue";
import IconDelete from "./components/icons/IconDelete.vue";
import ButtonIcon from "./components/buttons/ButtonIcon.vue";
</script>

<template>
  <main class="main-container">
    <!-- Comments -->
    <section class="comments-container">
      <ul class="comments">
        <li class="comment">
          <div class="card">
            <div class="counter">
              <button class="counter-action">+</button>
              <span>12</span>
              <button class="counter-action">-</button>
            </div>

            <div class="comment-content">
              <div class="comment-header">
                <div class="comment-header-thumbnail">
                  <img
                    src="./assets/images/avatars/image-amyrobson.png"
                    alt="Profile"
                  />
                </div>

                <h2 class="h5">
                  Name of user <span class="badge badge-primary">you</span>
                </h2>
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

              <p class="comment-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia aperiam vitae, cupiditate vero quae repellendus.
                Consequatur itaque culpa quae? Minima id laboriosam sunt,
                tempore distinctio laborum magni! Quaerat, recusandae earum.
              </p>
            </div>
          </div>

          <ul class="replies">
            <li class="comment">
              <div class="card">
                <div class="counter">
                  <button class="counter-action">+</button>
                  <span>12</span>
                  <button class="counter-action">-</button>
                </div>

                <div class="comment-content">
                  <div class="comment-header">
                    <div class="comment-header-thumbnail">
                      <img
                        src="./assets/images/avatars/image-amyrobson.png"
                        alt="Profile"
                      />
                    </div>

                    <h2 class="h5">Name of user</h2>
                    <span class="text-sm text-muted">1 month ago</span>

                    <div class="comment-actions">
                      <ButtonIcon color="danger">
                        <template #icon><IconDelete /></template
                        >Delete</ButtonIcon
                      >
                      <ButtonIcon color="primary">
                        <template #icon><IconReply /></template
                        >Reply</ButtonIcon
                      >
                    </div>
                  </div>

                  <p class="comment-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia aperiam vitae, cupiditate vero quae repellendus.
                    Consequatur itaque culpa quae? Minima id laboriosam sunt,
                    tempore distinctio laborum magni! Quaerat, recusandae earum.
                  </p>
                </div>
              </div>
            </li>
            <li class="comment">
              <div class="card">
                <div class="counter">
                  <button class="counter-action">+</button>
                  <span>12</span>
                  <button class="counter-action">-</button>
                </div>

                <div class="comment-content">
                  <div class="comment-header">
                    <div class="comment-header-thumbnail">
                      <img
                        src="./assets/images/avatars/image-amyrobson.png"
                        alt="Profile"
                      />
                    </div>

                    <h2 class="h5">Name of user</h2>
                    <span class="text-sm text-muted">1 month ago</span>

                    <div class="comment-actions">
                      <ButtonIcon color="danger">
                        <template #icon><IconDelete /></template
                        >Delete</ButtonIcon
                      >
                      <ButtonIcon color="primary">
                        <template #icon><IconReply /></template
                        >Reply</ButtonIcon
                      >
                    </div>
                  </div>

                  <p class="comment-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia aperiam vitae, cupiditate vero quae repellendus.
                    Consequatur itaque culpa quae? Minima id laboriosam sunt,
                    tempore distinctio laborum magni! Quaerat, recusandae earum.
                  </p>
                </div>
              </div>
            </li>
            <li class="comment">
              <div class="new-comment card">
                <div class="avatar">
                  <img
                    src="./assets/images/avatars/image-amyrobson.png"
                    alt="Avatar"
                  />
                </div>

                <div class="comment-form">
                  <textarea name="comment" id="comment" rows="3"></textarea>

                  <ButtonIcon color="primary" fill size="lg">SEND</ButtonIcon>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <li class="comment">
          <div class="card">
            <div class="counter">
              <button class="counter-action">+</button>
              <span>12</span>
              <button class="counter-action">-</button>
            </div>

            <div class="comment-content">
              <div class="comment-header">
                <div class="comment-header-thumbnail">
                  <img
                    src="./assets/images/avatars/image-amyrobson.png"
                    alt="Profile"
                  />
                </div>

                <h2 class="h5">Name of user</h2>
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

              <p class="comment-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia aperiam vitae, cupiditate vero quae repellendus.
                Consequatur itaque culpa quae? Minima id laboriosam sunt,
                tempore distinctio laborum magni! Quaerat, recusandae earum.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="new-comment-form">
      <div class="new-comment card">
        <div class="avatar">
          <img src="./assets/images/avatars/image-amyrobson.png" alt="Avatar" />
        </div>

        <div class="comment-form">
          <textarea name="comment" id="comment" rows="3"></textarea>

          <ButtonIcon color="primary" fill size="lg">SEND</ButtonIcon>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
