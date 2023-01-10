<template>
  <div class="sign-up">
    <div class="header">
      <h1 class="formTitle">Sign <span class="change-color">Up</span></h1>
    </div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :lg="12">
            <el-form-item prop="name">
              <el-input
                type="text"
                v-model="ruleForm.name"
                placeholder="First Name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="12">
            <el-form-item prop="last">
              <el-input
                type="text"
                v-model="ruleForm.last"
                placeholder="Last Name"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="Password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPass">
          <el-input
            type="password"
            v-model="ruleForm.confirmPass"
            autocomplete="off"
            placeholder="Confirm Password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input
            type="text"
            v-model.number="ruleForm.phone"
            placeholder="Phone Number"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" class="register" @click="Submit()"
            >Register</el-button
          >
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import {
  validatePass,
  validateConfirm,
  phoneValidator,
  validateName,
  validateLast,
} from "../global.js";
export default {
  name: "signUp",
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        last: "",
        pass: "",
        confirmPass: "",
        phone: "",
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
        confirmPass: [{ validator: validateConfirm, trigger: "change" }],
        phone: [{ validator: phoneValidator, trigger: "change" }],
        name: [{ validator: validateName, trigger: "change" }],
        last: [{ validator: validateLast, trigger: "change" }],
      },
    };
  },
  methods: {
    Submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          //axios.post("links/",this.ruleform).then((res)=>{
          //res.data = this.ruleForm;
          // commit(' SAVE_LOGOUT')
          //}).catch((error)=>{
          //  alert("error")
          //})
        } else {
          this.$message.error("Oops, this is an error");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.sign-up {
  padding-top: 100px;
  padding-right: 25px;
  border: 1px solid #ff8303;
  width: 42%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border-radius: 10px;
  text-align: center;
  background-color: rgb(245, 245, 245);
  // background: url("../assets/images/signUp.jpg");
}
.register {
  width: 100%;
  padding: 15px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  color: black;
  border: 0;
  font-size: 20px;
  background: #000000;
  color: #fff;
  &:hover {
    background: #ff8303;
  }
}
.change-color {
  color: #ff8303;
}
@media (max-width: 767px) /*phones and tabltes*/ {
  .formTitle,
  .register {
    font-size: 10px;
    padding: "auto";
  }
}
</style>
