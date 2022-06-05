<template>
  <main class="main">
    <SearchMainApp></SearchMainApp>
    <FirstStartMain></FirstStartMain>
    <StayPartner></StayPartner>
    <Enough></Enough>
    <Slider></Slider>
  </main>
</template>

<script>
import SearchMainApp from "./componentsMain/SearchAppMain.vue";
import FirstStartMain from "./componentsMain/FirstStartMain.vue";
import StayPartner from "./componentsMain/StayPartner.vue";
import Enough from "./componentsMain/Enough.vue";
import Slider from "./componentsMain/Slider.vue";

export default {
  name: "MainApp",
  components: {
    SearchMainApp,
    FirstStartMain,
    StayPartner,
    Enough,
    Slider,
  },
};
</script>

<style lang="scss">
.main {
  margin-bottom: 50px;
  padding: 150px 135px 0 135px;
}

@media (max-width: 430px) {
  .main {
    padding: 102px 0px 0px 0px;
    margin: 0;
  }
}
</style>
