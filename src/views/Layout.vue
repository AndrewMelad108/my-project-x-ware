<template>
  <div class="layout">
    <Navbar></Navbar>
    <NavMenu />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/layout-component/Navbar";
import NavMenu from "../components/layout-component/NavMenu";
import Footer from "../components/layout-component/Footer";
export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    Navbar,
    NavMenu,
    Footer,
  },
};
</script>

<style lang="scss">
.content {
  margin-top: 6%;
  z-index: 1;
}
.layout {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100% !important;
  overflow: hidden;
  height: 100%;
}
</style>
