import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
createApp({ i18n, App, render: (h) => h(App) }).mount("#personalwbesite");
