<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-app-demo
      </h1>
      <h2 class="subtitle">
        nuxt elementUi koa2 vuex i18n
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Logo
  },
  created() {
    this.SET_ACTIVEINDEX("/");
  },
  methods: {
    ...mapMutations(["SET_ACTIVEINDEX"])
  }
};
</script>

<style>
.container {
  min-height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
