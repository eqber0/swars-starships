<template>
  <div>
    <appHeader />
    <Nuxt />
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";

export default {
  components: {
    appHeader,
  },
};
</script>

<style lang="scss">
body {
  position: relative;
  min-height: 100vh;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("~/assets/background.jpg");
    background-image: cover;
    background-attachment: fixed;
    z-index: -1;
  }
}
</style>
