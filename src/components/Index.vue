<template>
  <renderer ref="renderer" antialias orbit-ctrl resize="window">
    <camera :position="{ z: 15 }"></camera>
    <scene background="#ffffff">
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
</template>

<script>
import chroma from "chroma-js";
export default {
  data() {
    return {
      maxMesh: 31,
      cscale: chroma.scale(["#000", "#ccc"]),
    };
  },
  mounted() {
    const renderer = this.$refs.renderer;
    renderer.onBeforeRender(() => {
      const currentTime = Date.now();
      let mesh, meshMove, item;
      for (let i = 1; i <= this.maxMesh; i++) {
        item = `mesh${i}`;
        mesh = this.$refs[item][0].mesh;
        meshMove = currentTime - i * 500;

        mesh.rotation.x = meshMove * 0.00015;
        mesh.rotation.y = meshMove * 0.0002;
        mesh.rotation.z = meshMove * 0.00017;
      }
    });
  },
  methods: {
    color(payload) {
      return this.cscale(payload / this.maxMesh).css();
    },
  },
};
</script>
