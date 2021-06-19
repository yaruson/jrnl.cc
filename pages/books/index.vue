<template>
  <!-- eslint-disable vue/no-v-html  -->
  <VPage header="Книги">
    <article
      v-for="book in withKeys"
      :id="book.key"
      :key="book.key"
      class="book"
    >
      <div class="book__cover">
        <img
          class="book__coverImage"
          :data-blur="book.blur"
          :src="
            book.hotlink ||
              `https://data.jrnl.cc/assets/${book.cover}?width=150&height=200&fit=cover`
          "
          :alt="`Обложка ${book.title}`"
        >
        <VBadge :color="badgeColors[book.status]" class="book__badge">
          {{ badgeLabels[book.status] }}
        </VBadge>
      </div>

      <div>
        <hgroup class="book__header">
          <h2 v-html="$typograf(book.title)" />
          <h3 v-html="$typograf(book.subtitle)" />
        </hgroup>

        <cite>{{ book.author }}</cite>

        <ul>
          <li>Добавлена <VDate :datetime="book.date_created" /></li>
          <li>
            Прочитано {{ book.pages_read }} из&nbsp;{{ book.pages_total }}
          </li>
          <li v-if="book.link">
            <a :href="book.link" rel="noopener" target="_blank">
              Страница книги на&nbsp;сайте издательства
            </a>
          </li>
        </ul>

        <blockquote v-if="book.review">
          <VMarkdown :source="book.review" />
        </blockquote>
      </div>
    </article>
  </VPage>
</template>

<script>
import VBadge from '~/components/VBadge.vue'
export default {
  components: { VBadge },
  data () {
    return {
      books: [],
      badgeColors: {
        backlog: 'blue',
        in_progress: 'yellow',
        read: 'green',
        abandoned: 'neutral'
      },
      badgeLabels: {
        backlog: 'В очереди',
        in_progress: 'Читаю',
        read: 'Прочитал',
        abandoned: 'Забросил'
      }
    }
  },
  async fetch () {
    this.books = (
      await this.$directus.items('books').readMany({
        sort: '-date_updated,-date_created'
      })
    )?.data
  },
  computed: {
    withKeys () {
      return this.books.map(book => ({
        ...book,
        key: `book-${book.id}`
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.book {
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: start;
  gap: 24px;

  &:nth-child(n + 2) {
    margin-top: 2rem;
  }

  &__cover {
    position: relative;
    display: flex;

    border-radius: 6px;
    overflow: hidden;
  }

  &__coverImage {
    height: 200px;
    width: 150px;

    &[data-blur="true"] {
      filter: blur(20px);
    }
  }

  &__badge {
    position: absolute;

    top: 10px;
    left: 10px;

    box-shadow: 2px 2px 3px rgba(#000, 0.5);
  }
}

hgroup {
  & h2 {
    margin: 0;
  }
  & h3 {
    margin-top: 0;
  }
}
</style>
