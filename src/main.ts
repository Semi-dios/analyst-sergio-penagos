import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { i18n } from "./i18n";
import { TroisJSVuePlugin } from "troisjs";

require("@/styles/custom.scss");

const app = createApp(App);

app.use(i18n);

app.use(store);
app.config.globalProperties.$store = store;
app.use(TroisJSVuePlugin);
app.mount("#personalwbesite");
