<template>
    <div :class="[ classProp , {card: true}]" @click="cardClick">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['classProp', 'onClick'],
    methods: {
        cardClick() {
            this.onClick ? this.onClick() : null;
        }
    }
}
</script>

<style lang="scss">
@import "../styles/variables";

.card {
  box-shadow: $box-shadow-sm;
  transition: $transition-base;
  cursor: pointer;
}

.card:hover {
  box-shadow: $box-shadow;
}

.card-footer {
  background-color: transparent;
}
</style>
