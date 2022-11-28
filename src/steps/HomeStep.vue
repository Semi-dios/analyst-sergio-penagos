<template>
  <div class="columns">
    <div class="column is-variable is-12-mobile">
      <div class="home-screen">
        <div class="home-screen__title mb-6 pt-6">
          <h1 class="has-text-weight-bold title is-1 is-spaced">
            {{ $t("home.welcome") }}
            <span class="text-gradient">{{ $t("home.name") }}</span>
          </h1>
          <p class="subtitle is-3">{{ $t("home.myself") }}</p>
        </div>
        <button
          class="button is-medium is-primary my-6 has-text-weight-semibold is-rounded"
        >
          {{ $t("home.button") }}
        </button>

       <div class="home-screen__button-down ">
          <span class="icon is-large mb-1">
            <ion-icon name="chevron-down-sharp"></ion-icon>
          </span>
       </div>

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
