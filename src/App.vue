<template>
  <div :class="backgroundDark ? 'bg-dark' : 'bg-light'">     
    <Header></Header>
    <Background>
      <template v-slot:main>
        <home-step />
      </template>
    </Background>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HomeStep from "./steps/HomeStep.vue";
import Background from "./components/Background.vue";
import { mapState, mapMutations } from "vuex";
import Header from "./components/Header.vue"
export default defineComponent({
  name: "App",
  components: {
    Background,
    HomeStep,
    Header
  },
  computed: {
    ...mapState(["backgroundDark"]),
  },

});
</script>
