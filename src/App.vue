<template>
  <div id="app">
  
    <router-view c />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
//less padding in icons in close sidebar
.el-menu-vertical-demo > li > div {
  margin: 0px 15px !important;
}
//number of notices
.el-badge__content.is-fixed {
  right: 21px !important;
}
.v-modal {
    position: none  !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5 !important;
    background: #000;
    display: none  !important ;
}

.el-rate__icon {
  margin-right: 0px !important;
}
</style>
