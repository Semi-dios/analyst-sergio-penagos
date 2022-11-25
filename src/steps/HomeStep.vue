<template>
  <div class="columns is-vcentered">
    <div class="column is-variable is-12-mobile is-6-tablet">First column</div>
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
