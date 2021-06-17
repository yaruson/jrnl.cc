<template>
  <div>
    <header class="header">
      <h1 class="header__text">
        {{ header }}
        <aside>@jrnl.cc</aside>
      </h1>
      <nav class="header__nav">
        <ul>
          <li
            v-for="([target, label], i) in navigationLinks"
            :key="`main-nav-${i}`"
            class="header__navItem"
          >
            <mark v-if="target === $route.path">
              <NuxtLink :to="target">
                {{ label }}
              </NuxtLink>
            </mark>
            <NuxtLink v-else :to="target">
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <VFooter />
  </div>
</template>

<script>
export default {
  props: {
    header: { type: String, required: true }
  },
  computed: {
    navigationLinks: () => [
      ['/', 'Заметки'],
      ['/books', 'Книги']
    ]
  }
}
</script>

<style lang="less" scoped>
header aside {
  display: inline;
  opacity: 0.5;
}

main {
  margin-top: 2rem;
  margin-bottom: 4rem;
}
</style>
