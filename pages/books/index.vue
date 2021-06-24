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
          :src="`https://data.jrnl.cc/assets/${book.cover}?width=150&height=200&fit=cover`"
          :alt="`Обложка ${book.title}`"
        >
        <VBadge :color="badgeColors[book.status]" class="book__badge">
          {{ badgeLabels[book.status] }}
        </VBadge>
      </div>

      <div class="book__title">
        <hgroup>
          <h2 v-html="$typograf(book.title)" />
          <h3 v-html="$typograf(book.subtitle)" />
        </hgroup>

        <cite>{{ book.author }}</cite>
      </div>

      <div class="book__info">
        <ul>
          <li>Добавлена <VDate :datetime="book.date_created" /></li>
          <li v-if="showPageCount[book.status]">
            Прочитано {{ book.pages_read }} из&nbsp;{{ book.pages_total }}
          </li>
          <li>
            <a
              v-if="book.link"
              :href="book.link"
              rel="noopener"
              target="_blank"
            >
              &laquo;{{ book.title }}&raquo; на&nbsp;сайте издательства
              {{ book.publisher }}
            </a>
            <template v-else>
              Издательство &mdash;&nbsp;{{ book.publisher }}
            </template>
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
      },
      showPageCount: {
        backlog: false,
        in_progress: true,
        read: false,
        abandoned: true
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

<style scoped>
.book {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  grid-template-areas: "cover" "title" "info";
}

@media (min-width: 360px) {
  .book {
    grid-template-columns: 150px auto;
    grid-template-areas: "cover title" "info info";
  }
}

@media (min-width: 520px) {
  .book {
    grid-template-areas: "cover title" "cover info";
  }
}

.book:nth-child(n + 2) {
  margin-top: 2rem;
}

.book__cover {
  grid-area: cover;
  justify-self: center;
  position: relative;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
}

.book__coverImage {
  height: 200px;
  width: 150px;
  border-radius: 6px;
}

.book__coverImage[data-blur="true"] {
  filter: blur(20px);
}

.book__title {
  grid-area: title;
}

.book__info {
  grid-area: info;
}

.book__info > ul {
  margin: 0;
}

.book__badge {
  position: absolute;
  top: 10px;
  left: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
}
hgroup h2 {
  margin: 0;
}
hgroup h3 {
  margin-top: 0;
}
</style>
