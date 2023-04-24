/* eslint-disable import/order */
import "@/@fake-db/db";
import "@/@iconify/icons-bundle";
import App from "@/App.vue";
import ability from "@/plugins/casl/ability";
import i18n from "@/plugins/i18n";
import layoutsPlugin from "@/plugins/layouts";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import { abilitiesPlugin } from "@casl/vue";
import "@core/scss/template/index.scss";
import "@styles/styles.scss";
import { createPinia } from "pinia";
import "uno.css";
import { createApp } from "vue";

import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import { dragscroll as vDragscroll } from "vue-dragscroll";

loadFonts();

// Create vue app
const app = createApp(App);

app.directive("dragscroll", vDragscroll);

// Use plugins

app.use(vuetify);
app.use(createPinia());
app.use(router);
app.use(layoutsPlugin);
app.use(i18n).use(autoAnimatePlugin);
app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
});

// Mount vue app
app.mount("#app");
