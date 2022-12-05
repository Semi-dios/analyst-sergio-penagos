import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import { i18n } from "./i18n";
import { TroisJSVuePlugin } from "troisjs";

require("@/styles/custom.scss");
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const app = createApp(App);

app.use(i18n);

app.use(store);
app.config.globalProperties.$store = store;
app.use(TroisJSVuePlugin);

app.mount("#personalwbesite");
