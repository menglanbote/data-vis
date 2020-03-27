<template>
  <div>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";
export default {
  components: { AppHeader, AppMain, AppFooter }
};
</script>
<style scoped>
.head_top {
  width: 100%;
  height: 7.8%;
  overflow: hidden;
  position: absolute;
  top: 0;
  background-image: url(../assets/images/header_icon.png);
}
.main_visual {
  width: 100%;
  position: absolute;
  height: 86.2%;
  top: 7.5%;
}
.footer {
  width: 100%;
  height: 6%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url(../assets/images/footer_icon.png);
}
</style>
