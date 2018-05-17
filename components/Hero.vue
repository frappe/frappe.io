<template>
  <section class="frappe-hero text-center">
      <slot></slot>
  </section>
</template>
<script>
export default {
    name: 'Hero',
    props: ['title', 'content']
}
</script>
<style scoped>
.frappe-hero {
    margin-top: 6rem;
    margin-bottom: 6rem;
}
</style>
