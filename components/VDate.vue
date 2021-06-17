<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <time :datetime="datetime" v-html="humanReadable" />
</template>

<script>
export default {
  props: {
    datetime: { type: String, required: true }
  },
  computed: {
    humanReadable () {
      const dt = new Date(this.datetime)
      const ds = dt.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })
      const ts = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      return `${ds} в&nbsp;${ts}`
    }
  }
}
</script>
