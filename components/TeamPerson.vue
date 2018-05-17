<template>
    <div class="team-person text-center">
        <img class="rounded" :src="imageLink" :alt="fullname">
        <div class="team-person-detail">
            <h6 class="mt-3">{{ fullname }}</h6>
            <span class="text-muted small">{{ position }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['image-link', 'fullname', 'position', 'social']
}
</script>
<style>
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
