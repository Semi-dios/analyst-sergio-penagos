<template>
  <section class="section">
    <div class="container bg-dark__carousel is-fluid">
      <div class="bg-dark__carousel-social-media">
        <a href="#" target="_blank" title="linkedin">
          <span class="icon is-medium">
            <ion-icon name="logo-linkedin"></ion-icon>
          </span>
        </a>
        <a href="#" target="_blank" title="github">
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
        <slot name="footer"></slot>
      </footer>
      <div class="bg-dark__carousel-steps" >
        <span class="icon bg-dark__carousel-steps-item " v-for="(index,step) in 4" :key="step"  ref="stepsRef" >
          <ion-icon name="ellipse-sharp"></ion-icon>
        </span> 
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  name: "Background",


};
</script>
