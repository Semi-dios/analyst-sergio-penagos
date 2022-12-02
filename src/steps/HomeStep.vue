<template>
  <div class="columns mb-6" id="stepsRef1">
    <div class="column is-variable is-12-mobile">
      <div class="home-screen">
        <div class="home-screen__title">
          <h1
            class="has-text-weight-bold title is-size-3-mobile is-size-1 is-spaced"
          >
            {{ $t("home.welcome") }}
            <span class="text-gradient">{{ $t("home.name") }}</span>
          </h1>
          <p class="subtitle is-size-5-mobile is-size-3">
            {{ $t("home.myself") }}
          </p>
        </div>
        <a
          type="button"
          href="@/assets/SergioPenagos_ResumeVersion3.pdf"
          class="button is-primary my-6 has-text-weight-semibold is-rounded is-size-6-mobile is-size-5"
          download
        >
          {{ $t("home.button") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapState } from "vuex";
export default defineComponent({
  name: "HomeStep",
  components: {},
  computed: {
    ...mapState(["backgroundDark"]),
  },
});
</script>
