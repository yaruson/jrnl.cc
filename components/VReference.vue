<template>
  <!-- eslint-disable vue/no-v-html -->
  <NuxtLink
    v-if="collection === 'books'"
    :to="{
      path: '/books',
      hash: '#book-' + item.id,
    }"
    class="reference_book"
    v-html="`${item.title} &mdash;&nbsp;${item.author}`"
  />
</template>

<script>
export default {
  props: {
    collection: {
      type: String,
      required: true,
      validatior: type => ['books'].includes(type)
    },
    item: { type: Object, required: true }
  }
}
</script>

<style scoped>
.reference_book::before {
  display: inline-block;
  content: "📚";
  margin-right: 0.5rem;
  text-decoration: none;
}
</style>
