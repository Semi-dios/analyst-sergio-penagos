<template>
  <Mesh />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Mesh from "./components/Mesh.vue";

@Options({
  components: {
    Mesh,
  },
})
export default class App extends Vue {}
</script>
