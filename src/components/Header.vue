<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
      
            <button
              class="button is-small"
              type="button"
              v-on:click="changeBackground"
            >
              <span class="icon is-small">
                <ion-icon name="sunny-outline"></ion-icon>
              </span>
            </button>
         
            <button
              class="button is-small"
              type="button"
              v-on:click="changeLanguage"
            >
              <span class="icon is-small">
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
      dark: false,
      languageEnglish: true,
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
});
</script>
