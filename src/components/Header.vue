<template>
  <section class="section">
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>
