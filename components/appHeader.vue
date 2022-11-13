<template>
  <header class="header">
    <div class="container">
      <div class="header__nav d-flex"></div>
      <div class="header__nav-item"></div>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  &__nav {
    &-item {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
}
</style>
