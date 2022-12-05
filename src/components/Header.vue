<template>
  <nav
    id="stepsRef1"
    class="navbar is-flex is-justify-content-space-between is-align-items-center"
    :class="dark ? 'bg-dark__navbar' : 'bg-light__navbar'"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a :href="currentUrl" class="is-size-4-mobile is-size-1 mb-0 navbar-item">
        <h3>Run<span class="text-gradient">Dev</span></h3>
      </a>
    </div>

    <div>
      <div :class="dark ? 'bg-dark__navbar-end' : 'bg-light__navbar-end'">
        <div class="navbar-item">
          <div class="buttons">
            <button
              class="is-small"
              :class="
                dark
                  ? 'bg-dark__navbar-button-icon'
                  : 'bg-light__navbar-button-icon'
              "
              type="button"
              v-on:click="changeBackground"
            >
              <span class="icon" v-if="dark">
                <ion-icon name="sunny-sharp"></ion-icon>
              </span>
              <span class="icon" v-else>
                <ion-icon name="moon-sharp"></ion-icon>
              </span>
            </button>

            <button
              class="is-small"
              :class="
                dark
                  ? 'bg-dark__navbar-button-icon'
                  : 'bg-light__navbar-button-icon'
              "
              type="button"
              v-on:click="changeLanguage"
            >
              <span class="icon">
                <ion-icon name="language-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapState, mapMutations } from "vuex";
export default defineComponent({
  name: "Header",

  computed: {
    ...mapState(["backgroundDark"]),
  },
  data() {
    return {
      dark: true,
      languageEnglish: true,
      currentUrl: "",
    };
  },
  methods: {
    ...mapMutations(["SET_BACKGROUND"]),
    changeBackground() {
      this.dark = !this.dark;
      this.SET_BACKGROUND(this.dark);
    },
    changeLanguage() {
      this.languageEnglish = !this.languageEnglish;
      this.$i18n.locale = this.languageEnglish ? "en" : "es";
    },
  },
  created() {
    this.currentUrl = window.location.href;
  },
});
</script>
