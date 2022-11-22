import { createI18n } from "vue-i18n";
import * as en from "./locales/en.json";
import * as es from "./locales/es.json";

type MessageSchema = typeof en;

export const i18n = createI18n<[MessageSchema], "en" | "es">({
  locale: "en",
  messages: {
    en,
    es,
  },
});
