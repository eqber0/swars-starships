<template>
  <div
    class="preloader"
    :class="this.$store.state.preloaderHidden ? 'hidden' : ''"
  >
    <div class="preloader__text">Loading...</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["hidePreloader"]),
  },
  methods: {
    start() {
      this.$store.commit("hidePreloader", false);
    },
    finish() {
      this.$store.commit("hidePreloader", true);
    },
  },
};
</script>

<style lang="scss">
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
  z-index: 5;
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
