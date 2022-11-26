<template>
  <div class="columns is-vcentered">
    <div class="column is-variable is-12-mobile">      
      <h1 class="font-bold title ">
            {{ $t("home.welcome") }} <span class="">{{ $t("home.name") }}</span>
      </h1>
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
