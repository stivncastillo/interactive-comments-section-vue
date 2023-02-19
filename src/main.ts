import type { State } from "./types.d";
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { commentsModule } from "./modules/commentsModule";
import { authModule } from "./modules/authModule";

import "./assets/scss/main.scss";

const store = createStore<State>({
  modules: {
    // @ts-ignore
    commentsModule,
    authModule,
  },
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);
app.mount("#app");
