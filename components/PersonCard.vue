<template>
  <base-card :classProp="classes">
    <img class="card-img-top" :src="imageLink" :alt="fullname">
    <div class="card-footer text-center">
        <h6 class="">{{ fullname }}</h6>
        <span class="badge badge-light badge-pill text-muted border">{{ position }}</span>
    </div>
  </base-card>
</template>
<script>
import BaseCard from '~/components/BaseCard';

export default {
    components: {
        BaseCard
    },
    props: ['image-link', 'fullname', 'position', 'social'],
    computed: {
        classes() {
            return ['team-person', !this.fullname ? 'invisible': ''].join(' ');
        }
    }
}
</script>
<style scoped>
.team-person {
    width: 200px;
    position: relative;
}

.team-person img {
    width: 200px;
    height: 200px;
    filter: grayscale();
    transition: 0.3s filter ease-in-out;
}

.team-person:hover img {
    filter: none;
}
</style>
