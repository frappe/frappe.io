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
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

$font-family-sans-serif: 'Lato', sans-serif;
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 980px
);

@import "bootstrap/scss/bootstrap.scss";
</style>
