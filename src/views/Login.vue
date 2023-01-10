<template>
  <div>
    <el-form
      id="form"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <h2 class="form-title">Log <span class="change-color">In</span></h2>
      <el-form-item prop="email">
        <el-input
          placeholder="Enter your Email"
          type="email"
          v-model="ruleForm.email"
          autocomplete="off"
          id="email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          placeholder="Enter your Password"
          v-model="ruleForm.pass"
          autocomplete="off"
          id="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" @click="submitForm()">Submit</el-button>
        <el-button class="btn" @click="resetForm()">Reset</el-button>
      </el-form-item>
      <p class="sign-up-link">
        dont have an account ?
        <router-link class="signup" to="/signup">sign up</router-link>
      </p>
    </el-form>
  </div>
</template>
<script>
// import axios from "axios";
import { validatePass } from "../global.js";
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        pass: "",
      },
      user: {
        email: "asd@asd.com",
        firstName: "ASD",
        lastName: "ASD",
        phoneNumber: "0123456789",
        token: "1534165s3ad1465xz41654fds6f46va4df6v5ds4f654s6d5vS",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: ["blur", "change"],
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        pass: [{ validator: validatePass, trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm() {
      //  this.$refs.ruleForm.validate((valid) => {
      // if (valid) {
      // this.$store.commit('SAVE_LOGOUT')
      this.$store.commit("SAVE_USER_EMAIL", this.user.email);
      this.$store.commit("SAVE_USER_FIRST_NAME", this.user.firstName);
      this.$store.commit("SAVE_USER_LAST_NAME", this.user.lastName);
      this.$store.commit("SAVE_USER_TOKEN", this.user.token);
      this.$store.commit("SAVE_USER_PHONE_NUMBER", this.user.phoneNumber);
      this.$router.push({ name: "search" });

      // } else {
      // console.log("error")
      // }
      // });

      // axios
      //   .post("link", this.ruleForm)
      //   .then((res) => {
      //     //  this.$store.commit('SAVE_USER_TOKEN',token)
      //     if (res.status === "200") {
      //       this.router.push({ name: "search" });
      //     }
      //   })
      //   .catch(() => {
      //     this.$message({
      //       showClose: true,
      //       message: "Oops, this is a error message.",
      //       type: "error",
      //     });
      //   });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
  created() {
    //check user create account or no and push to search page
    if (this.$store.getters.authToken) {
      this.$router.push({ path: "/search" });
    }
  },
};
</script>
<style scoped>
form {
  border: solid 1px rgb(225, 193, 7);
  background-color: rgb(245, 245, 245);
  width: 42%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  border-radius: 10px;
  text-align: center;
}
button {
  display: inline-block !important;
  padding: 7px 40px !important;
  border: 1px solid #ff8c04 !important;
  color: black !important;
  font-size: 16px !important;
  background-color: transparent !important;
}
button:hover {
  background-color: #ff8c04 !important;
}
.change-color {
  color: #ff8c04 !important;
}
.sign-up-link {
  text-align: center;
  text-transform: capitalize;
  color: #847c7c;
}
.signup {
  text-transform: capitalize;
  text-decoration: none;
  color: #ff8c04;
}
@media (max-width: 767px) /*phones and tabltes*/ {
  button {
    /* padding: auto!important; */
    font-size: 10px !important;
    width: 5% !important;
    margin: auto !important;
    text-align: center !important;
    padding-left: 10% !important;
  }
}
.form-title {
  font-size: 15px;
}
.sign-up-link {
  font-size: 10px;
}
</style>
