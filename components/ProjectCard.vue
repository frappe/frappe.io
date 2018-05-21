<template>
  <base-card :onClick="goToProjectPage">
    <div class="card-body">
      <h6 class="card-title">
        <a :href="href" class="text-dark"><strong>{{ title }}</strong></a>
      </h6>
      <p class="card-text">{{ body }}</p>
    </div>
    <div class="card-footer">
      <span v-for="badge of badges" :key="badge" class='badge badge-pill badge-light border text-muted mr-1 px-2 py-1'>{{ badge }}</span>
    </div>
  </base-card>
</template>
<script>
import BaseCard from '~/components/BaseCard';

export default {
  components: {
    BaseCard
  },
  props: ['title', 'body', 'badges', 'href'],
  methods: {
    goToProjectPage() {
      window.location.href = this.href;
    }
  }
}
</script>
<style scoped>
.card-title a {
  text-decoration: none;
}
</style>
