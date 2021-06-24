<template>
  <VPage header="Заметки">
    <article v-for="(note, i) in notes" :key="`note-${i}`">
      <footer>Опубликовано <VDate :datetime="note.date_created" /></footer>

      <VMarkdown :source="note.content" />
      <VReferences
        v-if="note.reference.length > 0"
        :references="note.reference"
      />
    </article>
  </VPage>
</template>

<script>
export default {
  data () {
    return { notes: [] }
  },
  async fetch () {
    this.notes = (
      await this.$directus.items('notes').readMany({
        fields: '*.collection,*.item.*',
        sort: '-date_created',
        filter: {
          status: { _eq: 'published' }
        }
      })
    )?.data
  }
}
</script>
