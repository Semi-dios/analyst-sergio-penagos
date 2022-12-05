<template>
 
  <section class="section"
  @scroll.passive="onScroll">
    <div
      class="container bg-dark__carousel is-fluid"
      :class="backgroundDark ? 'bg-dark__carousel' : 'bg-light__carousel'"
    >
      <div
        :class="
          backgroundDark
            ? 'bg-dark__carousel-social-media'
            : 'bg-light__carousel-social-media'
        "
        
      >
        <a
          href="https://www.linkedin.com/in/analyst-sergio-penagos"
          target="_blank"
          title="linkedin"
        >
          <span class="icon is-medium">
            <ion-icon name="logo-linkedin"></ion-icon>
          </span>
        </a>
        <a href="https://github.com/Semi-dios" target="_blank" title="github">
          <span class="icon is-medium">
            <ion-icon name="logo-github"></ion-icon>
          </span>
        </a>
        <a href="#" target="_blank" title="youtube">
          <span class="icon is-medium">
            <ion-icon name="logo-youtube"></ion-icon>
          </span>
        </a>
      </div>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="foot"></slot>
      </footer>
      <div
        class="is-hidden-mobile"
        :class="
          backgroundDark
            ? 'bg-dark__carousel-steps'
            : 'bg-light__carousel-steps'
        "
      >
        <a
          class="icon"
          :class="[
            backgroundDark
              ? 'bg-dark__carousel-steps-item'
              : 'bg-light__carousel-steps-item',
            isSelected === index ? 'step-selected' : '',
          ]"
          v-for="(index, step) in 4"
          :href="`#stepsRef${index}`"
          :key="step"
          :ref="`stepsRef${index}`"
          @click="stepSelected(index)"
        >
          <ion-icon name="ellipse-sharp"></ion-icon>
        </a>
      </div>
    </div>
  </section>


</template>

<script lang="ts">
import { mapState } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Background",
  computed: {
    ...mapState(["backgroundDark"]),
  },
  data() {
    return {
      isSelected: 1,
      
    }
  },
  methods: {
    stepSelected(step: any) {
      this.isSelected = step;
    },
   onScroll() {  
    let bottomOfWindow = document.documentElement.scrollTop;       
    if (bottomOfWindow > 550 && bottomOfWindow <= 999) {
        this.isSelected = 2;
    }else if(bottomOfWindow >= 1000  && bottomOfWindow <= 1549) {
        this.isSelected = 3;
    }else if(bottomOfWindow >= 1600) {
        this.isSelected = 4;
    }else {      
       this.isSelected =1;
    }
    

   },
  },
  created() {
    document.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.onScroll)
  }
})
</script>

