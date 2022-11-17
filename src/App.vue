<template>
  <div :class="backgroundDark ? 'bg-dark' : 'bg-light'">
    <Background>
      <template v-slot:header>
        <h1 class="text-red-600 font-mono text-3xl font-bold">
          {{ $t("content.name") }}
        </h1>
        <p class="buttons">
          <button
            class="button is-small"
            type="button"
            v-on:click="changeBackground"
          >
            <span class="icon is-small">
              <ion-icon name="sunny-outline"></ion-icon>
            </span>
          </button>
        </p>
        <p class="buttons">
          <button
            class="button is-small"
            type="button"
            v-on:click="changeLanguage"
          >
            <span class="icon is-small">
              <ion-icon name="language-outline"></ion-icon>
            </span>
          </button>
        </p>
      </template>
      <template v-slot:main>
        <Mesh />
      </template>
    </Background>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import Mesh from "./components/Mesh.vue";
import Background from "./components/Background.vue";
import { mapState, mapMutations } from "vuex";
export default defineComponent({
  name: "App",
  components: {
    Background,
    Mesh,
  },
  computed: mapState(["backgroundDark"]),

  data() {
    return {
      dark: false,
      languageEnglish: true,
    };
  },
  methods: {
    ...mapMutations(["SET_BACKGROUND", "SET_LANGUAGE"]),
    changeBackground() {
      this.dark = !this.dark;
      this.SET_BACKGROUND(this.dark);
    },
    changeLanguage() {
      this.languageEnglish = !this.languageEnglish;
      this.SET_LANGUAGE(this.languageEnglish);
      this.$i18n.locale = this.languageEnglish ? "en" : "es";
    },
  },
});
</script>
