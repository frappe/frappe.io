<template>
  <a :href="href" class="card shadow-sm text-dark">
    <div class="card-body">
      <h6 class="card-title">{{ title }}</h6>
      <p class="card-text">{{ body }}</p>
    </div>
    <div class="card-footer">
      <span v-for="badge of badges" :key="badge" class='badge badge-pill badge-secondary mr-1 px-2 py-1'>{{ badge }}</span>
    </div>
  </a>
</template>
<script>
export default {
    props: ['title', 'body', 'badges', 'href']
}
</script>
