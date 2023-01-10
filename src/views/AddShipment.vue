<template>
  <div class="all">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/shipments' }"
          >Shipments</el-breadcrumb-item
        >
        <el-breadcrumb-item>Add Shipment</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="add">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-row type="flex" class="drop row-bg" justify="center">
            <el-col :lg="20">
              <div
                class="img display-inline align-center"
                @dragover.prevent
                @drop="onDrop"
                @click="$refs.fileInput.click()"
              >
                <div v-if="!image">
                  <span class="el-icon-download" id="upload-icon"></span>
                  <h2>Drop an image or Browse</h2>
                  <label class="display-inline">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      @change="onChange"
                      ref="fileInput"
                    />
                  </label>
                </div>
                <div
                  class="img display-inline align-center"
                  v-else
                  v-bind:class="{ image: true }"
                >
                  <img :src="ruleForm.image" alt="" class="img" />
                  <br />
                  <br />
                  <button class="btn" @click.stop="removeFile">REMOVE</button>
                </div>
              </div>
            </el-col>
          </el-row>
          <div>
            <el-row :gutter="20">
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="from">
                  <el-input
                    type="text"
                    v-model="ruleForm.from"
                    placeholder="From"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="to">
                  <el-input
                    type="text"
                    v-model="ruleForm.to"
                    placeholder="To"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="row-bg" justify="center" :gutter="20">
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="date">
                  <el-date-picker
                    v-model="ruleForm.date"
                    type="date"
                    placeholder="Pick a day"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="itemName">
                  <el-input
                    type="text"
                    v-model="ruleForm.itemName"
                    placeholder="Item Name"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="link">
                  <el-input
                    type="text"
                    v-model="ruleForm.itemLink"
                    placeholder="Item Link"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="quantity">
                  <el-input
                    type="text"
                    v-model="ruleForm.quantity"
                    placeholder="Quantity"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="price">
                  <el-input
                    type="text"
                    v-model="ruleForm.price"
                    placeholder="Single Item Price"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-form-item prop="weight">
                  <el-input
                    type="text"
                    v-model="ruleForm.weight"
                    placeholder="Weight"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="24" :md="24" :sm="12" :xs="24">
                <el-form-item prop="category">
                  <el-select v-model="ruleForm.category" placeholder="Select">
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
            <el-row justify="center" type="flex">
              <el-col :lg="8" :md="12" :sm="12" :xs="24">
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
            <el-row class="row-bg" justify="center">
              <el-col>
                <el-button id="btn" type="primary" plain @click="goTo"
                  >Add Shipment</el-button
                >
              </el-col>
            </el-row>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {
  validateName,
  validateLast,
  validateInteger,
  validateSelect,
} from "../global.js";
export default {
  data() {
    return {
    
      fileInput: "",
      ruleForm: {
        from: "",
        to: "",
        date: "",
        itemName: "",
        itemLink: "",
        quantity: "",
        price: "",
        weight: "",
        textarea: "",
        category: "",
        image: "",
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
        to: [{ validator: validateLast, trigger: "change" }],
        date: [
          {
            required: true,
            message: "please input the date",
            trigger: "change",
          },
        ],
        itemName: [{ validator: validateName, trigger: "change" }],
        quantity: [{ validator: validateInteger, trigger: "change" }],
        weight: [{ validator: validateInteger, trigger: "change" }],
        category: [{ validator: validateSelect, trigger: "change" }],
        price: [{ validator: validateInteger, trigger: "change" }],
      },
    };
  },
  // mounted:{
  //   axios
  //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //   .then(response => (this.info = response.data.bpi))
  //   .catch(error => this.$message.error('Oops, This is an error.'))
  // },
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
    goTo() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: "This shipment has been added succsessfully",
            type: "success",
           
          });
           axios.post("link",this.ruleForm)
          this.$router.push({ name: "shipments" });
        } else {
          this.$message.error("Oops, this is a error message.");
        }
      });
    },
  },
};
</script>
<style scoped>
.el-select {
  width: 100%;
}
.btn {
  background-color: #d3394c;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  position: relative;
}
.btn:hover {
  background-color: #722040;
}
.el-date-editor {
  width: 100% !important;
}
input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
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
.image {
  width: 30% !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
.display-inline {
  display: inline-block;
  vertical-align: middle;
}

.img {
  width: 100%;
  height: 100%;
  border: 1px solid #f6f6f6;
  display: inline-block;
}
.drop {
  padding: 20px !important;
  margin-top: 31px !important;
  text-align: center !important;
  background-color: #f2f2f2 !important;
  border: 4px dashed #ccc !important;
  background-color: #f6f6f6 !important;
  border-radius: 2px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  height: 100% !important;
  width: 100% !important;
  margin-bottom: 25px;
}
.add {
  border: 1px solid #ff8303 !important;
  padding: 20px !important;
  margin: 20px;
  border-radius: 10px !important;
  text-align: center !important;
  background-color: rgb(245, 245, 245) !important;
}
.all {
  width: 100% !important;
  padding: 20px !important;
  line-height: 10px !important;
  margin-bottom: 60px !important;
}
#upload-icon {
  font-size: 45px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 60px !important;
}
#btn {
  width: 150px !important;
}
</style>
