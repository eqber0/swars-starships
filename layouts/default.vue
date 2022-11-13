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
