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
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
      <div class="bg-dark__carousel-steps">
        <span class="icon bg-dark__carousel-steps-item item-seleted">
          <ion-icon name="ellipse-sharp"></ion-icon>
        </span>
        <span class="icon bg-dark__carousel-steps-item">
          <ion-icon name="ellipse-sharp"></ion-icon>
        </span>
        <span class="icon bg-dark__carousel-steps-item">
          <ion-icon name="ellipse-sharp"></ion-icon>
        </span>
        <span class="icon bg-dark__carousel-steps-item">
          <ion-icon name="ellipse-sharp"></ion-icon>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Background",
};
</script>
