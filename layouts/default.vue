<template>
  <div>
    <v-header />
    <div class="nuxt_con">
      <nuxt />
    </div>
  </div>
</template>

<script>
import VHeader from "~/components/Header";
export default {
  components: {
    VHeader
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.nuxt_con {
  padding-top: 3rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
