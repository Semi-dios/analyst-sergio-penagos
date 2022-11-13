/* Config file for i18n plugin */

import Vue from "vue";
import VueI18n from "vue-i18n";
// The default language is spanish.
// If you add another language to your project be sure to:
// STEP 1: import the validations messages from vee-validate.
import es from "vee-validate/dist/locale/es.json";
import enUS from "vee-validate/dist/locale/en.json";
import esLocales from "./locales/es.json";

Vue.use(VueI18n);

// Get page language from modyo, change to your needs
const LANG = "es";

function loadLocaleMessages() {
  const locales = {
    es: esLocales,
  };

  const messages = {};

  Object.keys(locales).forEach((key) => {
    messages[key] = locales[key];
  });

  // STEP 2: add the validation messages to the i18n plugin.
  // Copy the code below for every new language you add.
  messages.es = {
    ...messages.es,
    validations: es.messages,
  };

  messages["en-US"] = {
    ...messages["en-US"],
    validations: enUS.messages,
  };

  return messages;
}

export default new VueI18n({
  locale: LANG,
  fallbackLocale: "es",
  silentFallbackWarn: true,
  messages: loadLocaleMessages(),
});
