<template>
  <div class="page">
    <nav-bar />
    <nuxt/>
    <frappe-footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import FrappeFooter from '~/components/Footer.vue';

export default {
    components: {
        NavBar,
        FrappeFooter
    }
}
</script>

<style lang="scss">
@import "../styles/variables";
@import "bootstrap/scss/bootstrap.scss";
</style>
