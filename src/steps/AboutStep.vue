<template>
  <div class="container is-max-desktop about-screen" id="stepsRef2">
    <div class="columns">
      <div class="column is-variable is-12-mobile is-9-tablet">
        <div class="about-screen__description">
          <span class="text-gradient is-size-4-mobile is-size-3">{{
            $t("about.title")
          }}</span>
          <h2
            class="has-text-weight-bold title is-size-3-mobile is-size-1 is-spaced"
          >
            {{ $t("about.subtitle") }}
          </h2>
          <p class="is-size-6-mobile is-size-5">
            {{ $t("about.description") }}
          </p>
        </div>
      </div>
      <div class="column is-3-tablet is-variable is-12-mobile">
        <div class="about-screen__content-img">
          <figure class="image about-screen__image">
            <img v-if="image_profile" alt="personal" :src="image_profile" />
            <img
              v-else
              alt="image-not-found"
              src="@/assets/Image_not_found.png"
            />
          </figure>
          <figure class="image about-screen__dots">
            <img src="@/assets/menphis.png" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapState } from "vuex";
export default defineComponent({
  name: "AboutStep",
  components: {},
  computed: {
    ...mapState(["backgroundDark"]),
  },
  data() {
    return {
      image_profile: null,
    };
  },
});
</script>
