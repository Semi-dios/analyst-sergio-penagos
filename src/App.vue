<template>
  <div :class="backgroundDark ? 'bg-dark' : 'bg-light'">
    <Header></Header>
    <Background>
      <template v-slot:main>
        <home-step />
        <about-step />
        <project-step :images="images" />
      </template>
    </Background>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import HomeStep from "./steps/HomeStep.vue";
import AboutStep from "./steps/AboutStep.vue";
import ProjectStep from "./steps/ProjectStep.vue";
import Background from "./components/Background.vue";
import { mapState, mapMutations } from "vuex";
import Header from "./components/Header.vue";
export default defineComponent({
  name: "App",
  components: {
    Background,
    HomeStep,
    ProjectStep,
    Header,
    AboutStep,
  },
  computed: {
    ...mapState(["backgroundDark"]),
  },
  setup() {
    const _images = [
      { id: 1, url: "https://picsum.photos/300/200?q=1" },
      { id: 2, url: "https://picsum.photos/300/200?q=2" },
      { id: 3, url: "https://picsum.photos/300/200?q=3" },
      { id: 4, url: "https://picsum.photos/300/200?q=4" },
    ];
    const images = ref(_images);
    const handelDeleteImage = (index: number) => images.value.splice(index, 1);

    return { handelDeleteImage, images };
  },
});
</script>
