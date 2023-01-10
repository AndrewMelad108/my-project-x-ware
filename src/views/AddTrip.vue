<template>
  <div class="all">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/trips' }">Trips</el-breadcrumb-item>
        <el-breadcrumb-item>Add Trip</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="add">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <h3 class="heading">Trip Info</h3>
          <el-row :gutter="20">
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="from">
                <el-input
                  type="text"
                  v-model="ruleForm.from"
                  placeholder="From"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="to">
                <el-input
                  type="text"
                  v-model="ruleForm.to"
                  placeholder="To"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="date">
                <el-date-picker
                  v-model="ruleForm.date"
                  type="date"
                  placeholder="Pick a day"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="time">
                <el-time-select
                  v-model="ruleForm.time"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                  }"
                  placeholder="Select time"
                >
                </el-time-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg="12" :md="12" :sm="24" :xs="24" :span="10"
              ><div class="grid-content bg-purple"></div>
              <el-form-item prop="weight">
                <el-input
                  type="text"
                  v-model="ruleForm.weight"
                  placeholder="Weight"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <h3 class="heading">Booking Info</h3>
          <el-row class="row-bg" justify="center" :gutter="20">
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="transport">
                <el-select
                  v-model="ruleForm.transport"
                  placeholder="Choose Transport"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.index"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="reference">
                <el-input
                  type="text"
                  v-model="ruleForm.reference"
                  placeholder="Booking Reference"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="first">
                <el-input
                  type="text"
                  v-model="ruleForm.first"
                  placeholder="First Name"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="last">
                <el-input
                  type="text"
                  v-model="ruleForm.last"
                  placeholder="Last Name"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
              <el-form-item prop="category">
                <el-select
                  v-model="ruleForm.category"
                  placeholder="Choose Category"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.index"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :lg="8">
              <el-form-item prop="notes">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Please input"
                  v-model="ruleForm.textarea"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col>
              <el-button :plain="true" id="btn" type="primary" @click="addTrip"
                >Add Trip</el-button
              >
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { validateName, validateInteger, validateSelect } from "../global.js";
export default {
  data() {
    return {
      ruleForm: {
        from: "",
        to: "",
        date: "",
        time: "",
        weight: "",
        transport: "",
        reference: "",
        first: "",
        last: "",
        category: "",
      },
      options: [
        {
          value: "Electronic",
          label: "Electronic",
        },
        {
          value: "Bags",
          label: "Bags",
        },
        {
          value: "shoes",
          label: "shoes",
        },
        {
          value: "Mobiles",
          label: "Mobiles",
        },
        {
          value: "Kitchen machines",
          label: "Kitchen machines",
        },
      ],
      options2: [
        {
          value: "Electronic",
          label: "Electronic",
        },
        {
          value: "Bags",
          label: "Bags",
        },
        {
          value: "shoes",
          label: "shoes",
        },
        {
          value: "Mobiles",
          label: "Mobiles",
        },
        {
          value: "Kitchen machines",
          label: "Kitchen machines",
        },
      ],
      rules: {
        link: [
          {
            required: true,
            message: "Please input link",
            trigger: ["blur", "change"],
          },
          {
            type: "url",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        from: [{ validator: validateName, trigger: "change" }],
        to: [{ validator: validateName, trigger: "change" }],
        reference: [{ validator: validateName, trigger: "change" }],
        date: [
          {
            required: true,
            message: "please input the date",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            message: "please input the time",
            trigger: "change",
          },
        ],
        last: [{ validator: validateName, trigger: "change" }],
        first: [{ validator: validateName, trigger: "change" }],
        weight: [{ validator: validateInteger, trigger: "change" }],
        category: [{ validator: validateSelect, trigger: "change" }],
        transport: [{ validator: validateSelect, trigger: "change" }],
      },
    };
  },
  methods: {
    onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
    },
    onChange(e) {
      var files = e.target.files;
      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        this.$message({
          message: "Warning, this is a warning message.",
          type: "warning",
        });
        return;
      }
      // var img = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.image = "";
    },
    addTrip() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: "this trip has been added succsessfully",
            type: "success",
          });
          this.$router.push({ name: "trips" });
        } else {
          this.$message.error("Oops, ALL This fields is required!");
        }
      });
    },
  },
};
</script>
<style scoped>
.heading {
  padding: 10px;
  text-align: left;
}
.el-select {
  width: 100%;
}

.el-date-editor {
  width: 100% !important;
}
.align-center {
  text-align: center;
}

.helper {
  height: 90%;
  display: inline-block;
  vertical-align: middle;
  width: 0;
}

.hidden {
  display: none !important;
}

.hidden.image {
  display: inline-block !important;
}

.display-inline {
  display: inline-block;
  vertical-align: middle;
}
.add {
  border: 1px solid #ff8303 !important;
  padding: 20px !important;
  margin: 20px;
  border-radius: 10px !important;
  text-align: center !important;
  background-color: rgb(245, 245, 245) !important;
}
.change {
  margin: 4px !important;
}
.all {
  padding: 20px;
  width: 100% !important;
  line-height: 10px !important;
  margin-bottom: 60px !important;
}
#btn {
  width: 150px !important;
}
</style>
