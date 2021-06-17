<template>
  <aside>
    <ul>
      <li v-for="ref in withKeys" :key="ref.key">
        <VReference v-bind="ref" />
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    references: { type: Array, required: true }
  },
  computed: {
    withKeys () {
      return this.references.map(ref => ({
        ...ref,
        key: `ref-${ref.collection}-${ref.item.id}`
      }))
    }
  }
}
</script>
