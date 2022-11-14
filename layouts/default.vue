<template>
  <div>
    <div class="preloader" :class="this.preloaderHidden ? 'hidden' : ''">
      <div class="preloader__text">Welcome to Star Wars Starships</div>
    </div>
    <appHeader />
    <Nuxt />
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";

export default {
  data() {
    return {
      preloaderHidden: false,
    };
  },
  components: {
    appHeader,
  },
  mounted() {
    setTimeout(() => {
      this.preloaderHidden = true;
    }, 1500);
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
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #1e1e1e;
  overflow: hidden;
  transition: var(--transition);
  transition: all 0.5s ease-in-out;
  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 100px;
    transform: perspective(300px) rotateX(25deg);
    color: #ffff82;
    animation: scroll 15s linear;
    transition: all 0.5s ease-in-out;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
}
@keyframes scroll {
  0% {
    transform: perspective(300px) rotateX(25deg) translateY(0);
  }
  100% {
    transform: perspective(300px) rotateX(25deg) translateY(-100%);
  }
}
</style>
