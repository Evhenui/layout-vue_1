<template>
  <div class="main-container">
    <HeaderApp></HeaderApp>
    <MainApp></MainApp>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
};
</script>

<style lang="scss">
#app {
  max-width: 1440px;
  margin: 0 auto;
}

@media (max-width: 430px) {
  #app {
    max-width: 430px;
  }
}
</style>
