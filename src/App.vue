<template>
  <div>
    <index />
    <h1 class="text-red-600 font-mono text-3xl font-bold">
      {{ $t("content.name") }}
    </h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Index from "./components/Index.vue";

export default defineComponent({
  name: "App",
  components: {
    Index,
  },
});
</script>
<style lang="scss">
body,
html {
  margin: 0;
}
canvas {
  display: block;
}
</style>
