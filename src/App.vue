<template>

  <div :class="backgroundDark ? 'bg-dark' : 'bg-light'">
    <Header></Header>
    <Background>
      <template v-slot:main>
        <home-step />
        <about-step />
        <project-step />
        <skill-step />
      </template>
      <template v-slot:foot>
        <footer-custom />
      </template>
    </Background>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import HomeStep from "./steps/HomeStep.vue";
import AboutStep from "./steps/AboutStep.vue";
import ProjectStep from "./steps/ProjectStep.vue";
import SkillStep from "./steps/SkillStep.vue";
import Background from "./components/Background.vue";
import { mapState } from "vuex";
import Header from "./components/Header.vue";
import FooterCustom from "./components/FooterCustom.vue";
export default defineComponent({
  name: "App",
  components: {
    Background,
    HomeStep,
    ProjectStep,
    Header,
    AboutStep,
    SkillStep,
    FooterCustom,
  },
  computed: {
    ...mapState(["backgroundDark"]),
  },
});
</script>

