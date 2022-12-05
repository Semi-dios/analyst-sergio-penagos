<template>
  <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
    <h6>{{ $t("home.name") }} &#169; {{printYear()}}</h6>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterCustom",
  mounted() {
    this.printYear() 
  },
  methods: {
    printYear() {
        return new Date().getFullYear();
    },  
  },
});
</script>
