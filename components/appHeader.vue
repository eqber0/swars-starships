<template>
  <header class="header">
    <div class="container">
      <NuxtLink class="header__logo" to="/">
        <img src="~/assets/qbr.svg" alt="" />
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 50px 0;
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 160px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
