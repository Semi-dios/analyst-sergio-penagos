<template>
  <div class="container-canvas">
    <renderer ref="renderer" orbit-ctrl resize="false" :width="450">
      <camera :position="{ z: 15 }" zoom="false"></camera>
      <scene background="#000">
        <ambient-light color="#808080"></ambient-light>
        <point-light color="#ffffff" :position="{ y: 50, z: 0 }"></point-light>
        <point-light color="#ffffff" :position="{ y: -50, z: 0 }"></point-light>
        <point-light color="#ffffff" :position="{ y: 0, z: 0 }"></point-light>
        <torus
          v-for="(index, msh) in maxMesh"
          :key="msh"
          :ref="`mesh${msh + 1}`"
          :radius="index * 0.2"
          :tube="0.1"
          :radial-segments="8"
          :tubular-segments="(index + 2) * 4"
        >
          <toon-material :color="color(index)"></toon-material>
        </torus>
      </scene>
    </renderer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import chroma from "chroma-js";

export default defineComponent({
  data() {
    return {
      maxMesh: 31,
      cscale: chroma.scale(["#000", "#ccc"]),
    };
  },
  mounted() {
    const { renderer } = this.$refs as any;
    renderer.onBeforeRender(() => {
      const currentTime = Date.now();
      let mesh, meshMove, item;
      // eslint-disable-next-line
      for (let i = 1; (i <= this.maxMesh); i++) {
        item = `mesh${i}`;
        mesh = this.$refs[item] as any;
        let newMesh = mesh[0].mesh;

        meshMove = currentTime - i * 500;

        newMesh.rotation.x = meshMove * 0.00015;
        newMesh.rotation.y = meshMove * 0.0002;
        newMesh.rotation.z = meshMove * 0.00017;
      }
    });
  },
  methods: {
    color(payload: number) {
      return this.cscale(payload / this.maxMesh).css();
    },
  },
});
</script>

<style scoped lang="scss">
.container-canvas {
  width: 450px;
  height: 450px;
  canvas {
    width: inherit;
    height: inherit;
  }
}
</style>
