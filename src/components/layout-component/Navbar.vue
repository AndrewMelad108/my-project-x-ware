<template>
  <div class="navbar">
    <div class="icon">
      <el-row type="flex">
        <div class="buttons">
          <el-badge class="badge-icon" :value="200" :max="99">
            <el-dropdown>
              <el-button
                type="info"
                circle
                class="notices"
                icon="el-icon-message-solid"
              ></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="notice in notices" :key="notice.index">
                  <el-row class="info-content">
                    <h6>{{ notice.title }}</h6>
                    <p>{{ notice.description }}</p>
                  </el-row>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-badge>
          <el-button
            type="info"
            circle
            class="notices"
            icon="el-icon-user"
            @click="profile"
          ></el-button>
          <el-button type="info" circle class="notices" @click="logout"
            ><b-icon icon="power" aria-hidden="true"></b-icon>
          </el-button>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      notices: [
        {
          title: "notice #1",
          description: "aaaaaaassssddddd",
        },
        {
          title: "notice #2",
          description: "aaaaaaassssddddd",
        },
        {
          title: "notice #3",
          description: "aaaaaaassssddddd",
        },
        {
          title: "notice #4",
          description: "aaaaaaassssddddd",
        },
      ],
    };
  },
  methods: {
    profile() {
      this.$router.push({ name: "Profile" });
    },
    logout() {
      this.$store.commit("SAVE_LOGOUT");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dropdown {
  vertical-align: top;
  min-width: 60%;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background: #f5c489;
  color: black;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
  overflow: hidden;
}
.badge-icon {
  margin-right: 12px;
  margin-top: -7px;
}
.buttons {
  margin-left: auto;
  padding: 15px;
}

.navbar {
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  color: black;
  font-size: 20%;
  text-align: end;
  text-transform: capitalize;
  margin-bottom: 10rem !important;
  padding: 10px 0;
  z-index: 6 !important;
  .icon {
    .notices {
      font-size: 15px;
    }
  }
  .copy-right {
    padding: 10px;
    .color-word {
      color: #ff8303;
      text-transform: uppercase;
    }
  }
}
</style>
