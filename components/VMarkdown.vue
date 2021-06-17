<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="render" />
</template>

<script>
export default {
  props: {
    source: { type: String, required: true }
  },
  computed: {
    render () {
      return this.$typograf(this.$marked(this.source))
    }
  }
}
</script>
