<template>
  <div class="dashbord">
    <el-menu
      background-color="black"
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-button
        icon="el-icon-menu"
        class="btn-toggle"
        @click="navMenu()"
      ></el-button>
      <el-menu-item>
        <router-link tag="li" to="/search" class="links">
          <i class="el-icon-search"></i>
          <span class="title">search</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link tag="li" to="/shipments" class="links">
          <i class="el-icon-box"></i>
          <span class="title">shipments</span></router-link
        >
      </el-menu-item>
      <el-menu-item>
        <router-link tag="li" to="/trips" class="links">
          <i class="el-icon-map-location"></i>
          <span class="title">trips</span></router-link
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    navMenu() {
      this.isCollapse = !this.isCollapse;
    },
    handleResize() {
      if (window.innerWidth <= 910) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style lang="scss" scoped>
.dashbord {
  z-index: 999999999;
}
.el-menu 
/*siderbar height*/ {
  border-radius: 0 10px 10px 0;
  position: relative;
}
.btn-toggle {
  position: absolute;
  top: 0;
  right: 0;
  background: black;
  color: #fff;
  font-size: 25px;
  margin-bottom: 20px;
  border: 0;
  &:hover {
    color: "#ff8303 ";
  }
}
.el-menu--collapse {
  min-height: 100vh;
  height: 100%; //small size sidebar
  width: 50px;
  .links {
    .title {
      display: none;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px; /*width slidebar  */
  min-height: 100vh;
  height: 100%;
}
.el-menu-item.is-active {
  /*color word link is active*/
  color: black;
}
.el-menu-item.is-active i {
  text-align: center;
  padding-left: 5px;
}
.el-menu-item:hover {
  /*hover links*/
  background: #ff8303 !important;
  color: black;
}
.el-menu-item {
  /* color link without hover */
  color: #ffff !important;
  margin: 20px;
  font-size: 20px;
}
.el-menu-item i {
  /*color icon bettween link */
  color: #fff;
  margin: 0 20px 0 -18px !important;
  cursor: pointer;
}
.el-menu-item {
  margin: 35px 0;
}
.links {
  font-weight: bold;
  line-height: 1.5;
  padding: 10px;
  word-spacing: 1.5;
}
@media (min-width: 768px) and (max-width: 991px) /*small screen*/ {
}
</style>
