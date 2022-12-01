<template>
  <section class="section">
    <div
      class="container bg-dark__carousel is-fluid"
      :class="backgroundDark ? 'bg-dark__carousel' : 'bg-light__carousel'"
    >
      <div
        :class="
          backgroundDark
            ? 'bg-dark__carousel-social-media'
            : 'bg-light__carousel-social-media'
        "
      >
        <a
          href="https://www.linkedin.com/in/analyst-sergio-penagos"
          target="_blank"
          title="linkedin"
        >
          <span class="icon is-medium">
            <ion-icon name="logo-linkedin"></ion-icon>
          </span>
        </a>
        <a href="https://github.com/Semi-dios" target="_blank" title="github">
          <span class="icon is-medium">
            <ion-icon name="logo-github"></ion-icon>
          </span>
        </a>
        <a href="#" target="_blank" title="youtube">
          <span class="icon is-medium">
            <ion-icon name="logo-youtube"></ion-icon>
          </span>
        </a>
      </div>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
      <div
        class="is-hidden-mobile"
        :class="
          backgroundDark
            ? 'bg-dark__carousel-steps'
            : 'bg-light__carousel-steps'
        "
      >
        <span
          class="icon"
          :class="
            backgroundDark
              ? 'bg-dark__carousel-steps-item'
              : 'bg-light__carousel-steps-item'
          "
          v-for="(index, step) in 4"
          :key="step"
          ref="stepsRef"
        >
          <ion-icon name="ellipse-sharp"></ion-icon>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { mapState } from "vuex";
export default {
  name: "Background",
  computed: {
    ...mapState(["backgroundDark"]),
  },
};
</script>
