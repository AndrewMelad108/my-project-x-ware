<template>
  <div class="profile">
    <el-row class="info">
      <el-col class="content-info" :lg="16" :md="16" :xs="24" :sm="24">
        <h1 class="firstName">{{ user.firstName }}</h1>
        <h1 class="lastName">{{ user.lastName }}</h1>
        <p class="lead information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          laudantium
        </p>
        <h3 class="general-skills">general info</h3>
        <ul class="person-info list-unstyled">
          <li class="email">
            <span class="title-email">E-mail</span>
            <span class="email-value"> {{ user.email }}</span>
          </li>
          <li class="phone">
            <span class="title-phone">phone</span>
            <span class="phone-value">{{ user.phoneNumber }}</span>
          </li>
          <li class="rate">
            <el-row>
              <span class="title-rate" :lg="4">rate</span>
              <span class="rate-value" :lg="20">
                <el-rate
                  v-model="user.rate"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} points"
                >
                </el-rate>
              </span>
            </el-row>
          </li>
        </ul>
      </el-col>
      <el-col class="images" :lg="8" :md="8" :xs="24" :sm="24">
        <img :src="user.images" alt="" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "andrew",
        lastName: "melad",
        rate: 5,
        email: "dodomelad04@gmailcom",
        phoneNumber: "01210673776",
        images:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  height: 100%;
  width: 100%;
  margin: 0 5%;
  margin-bottom: 35px;
  .info {
    margin: 5% 0;
    background: #fbfbfb;
    padding: 5%;
    height: 80%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    .content-info {
      content-info {
        padding-left: 5%;
      }
      .firstName,
      .lastName {
        font-size: 60px;
        text-transform: capitalize;
        margin-top: 2%;
      }
      .information {
        color: #a2a2a2;
        text-transform: capitalize;
        margin-bottom: 10%;
        margin-bottom: 5%;
      }
      .general-skills {
        text-transform: capitalize;
        color: #757575;
      }
      .person-info > li {
        padding: 3% 0;
      }
      .email,
      .phone,
      .rate {
        .title-email,
        .title-phone,
        .title-rate {
          padding-right: 3%;
        }
        .email-value,
        .phone-value,
        .rate-value {
          color: #757575;
        }
      }
      .rate {
        display: inline;
        .rate-value {
          display: inline-block;
          padding-left: 3%;
        }
      }
    }
    .images > img {
      //   height: 150%;
      width: 80%;
      margin: auto;
      border-radius: 10px;
      margin-top: 15%;
    }
  }
  .el-rate__icon,
  .el-rate__item {
    // margin-right: 0px !important;
    margin-bottom: 6%;
    margin-left: 0 !important;
  }
}
</style>
