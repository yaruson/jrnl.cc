<template>
  <div class="badge" :data-color="color">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'neutral',
      validator: value =>
        ['neutral', 'neutral', 'blue', 'green', 'yellow'].includes(value)
    }
  }
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  color: #000;
}

.badge[data-color="neutral"] {
  background: #eceff1;
}

.badge[data-color="blue"] {
  background-color: #68b0f4;
}

.badge[data-color="green"] {
  background-color: #61c998;
}

.badge[data-color="yellow"] {
  background-color: #f2c94c;
}
</style>
