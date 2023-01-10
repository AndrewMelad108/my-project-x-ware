<template>
  <div class="info">
    <div>
      <div class="add">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-row type="flex" class="row-bg" justify="center" :gutter="20">
            <el-col :lg="10" :sm="24" :xs="24" :md="12">
              <p :disabled="!isEditing">From</p>
            </el-col>
            <i class="el-icon-arrow-right" id="arrow"></i>
            <el-col :lg="10" :sm="24" :xs="24" :md="12">
              <p :disabled="!isEditing">To</p>
            </el-col>
          </el-row>
          <hr style="color: #409eff" />
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :lg="10">
              <div class="demo-image__placeholder" v-if="!isEditing">
                <div class="image">
                  <el-image :src="ruleForm.image"></el-image>
                </div>
              </div>
              <div
                v-else
                class="drop display-inline align-center"
                @dragover.prevent
                @drop="onDrop"
                @click="$refs.fileInput.click()"
              >
                <div v-if="!ruleForm.image">
                  <span class="el-icon-download" id="change"></span>
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
                  class="display-inline align-center"
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
              <el-col :lg="12" :md="12" :sm="24" :xs="24">
                <el-form-item prop="product">
                  <el-input
                    :disabled="!isEditing"
                    v-model="ruleForm.product"
                    type="text"
                    placeholder="Product"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="24" :xs="24">
                <el-form-item prop="quantity">
                  <el-input
                    :disabled="!isEditing"
                    type="text"
                    v-model="ruleForm.quantity"
                    placeholder="Quantity"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <el-row :gutter="20">
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="weight">
                <el-input
                  :disabled="!isEditing"
                  type="text"
                  v-model="ruleForm.weight"
                  placeholder="Weight"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="link">
                <el-input
                  :disabled="!isEditing"
                  type="text"
                  v-model="ruleForm.link"
                  placeholder="Link"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="category">
                <el-select
                  v-model="ruleForm.category"
                  placeholder="Category"
                  :disabled="!isEditing"
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
            <el-col :lg="12" :md="12" :sm="24" :xs="24">
              <el-form-item prop="date">
                <el-date-picker
                  :disabled="!isEditing"
                  type="date"
                  v-model="ruleForm.date"
                  placeholder="Date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="12">
              <el-form-item prop="rewarad">
                <el-input
                  :disabled="!isEditing"
                  type="text"
                  placeholder="Traveler Reward"
                  v-model="ruleForm.rewarad"
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div>
            <el-button
              type="primary"
              plain
              v-on:click="activateInEditMode"
              v-show="!isEditing"
              class="edit"
              >Edit</el-button
            >
            <el-button
              type="success"
              v-on:click="editShipment"
              v-show="isEditing"
              class="cancel"
              >Save</el-button
            >
            <el-button
              type="danger"
              v-on:click="cancelEditShipment"
              v-show="isEditing"
              class="cancel"
              >Cancel</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { validateName, validateInteger, validateSelect } from "../../global.js";
// import axios from "axios";
export default {
  data() {
    return {
      isEditing: false,
      ruleForm: {
        image:
          "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        product: "",
        quantity: "",
        weight: "",
        link: "",
        category: "",
        date: "",
        rewarad: "",
      },
      fileInput: "",
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
            message: "Please input correct link",
            trigger: ["blur", "change"],
          },
        ],
        date: [
          {
            required: true,
            message: "please input the date",
            trigger: "change",
          },
        ],
        product: [{ validator: validateName, trigger: "change" }],
        quantity: [{ validator: validateInteger, trigger: "change" }],
        weight: [{ validator: validateInteger, trigger: "change" }],
        category: [{ validator: validateSelect, trigger: "change" }],
        rewarad: [{ validator: validateInteger, trigger: "change" }],
      },
    };
  },
  mounted() {
    this.cachedUser = Object.assign({}, this.ruleForm);

    //   axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response.data.bpi))
    //   .catch(error => this.$message.error('Oops, This is an error.'))
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
        vm.ruleForm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.ruleForm.image = "";
    },
    activateInEditMode() {
      this.isEditing = true;
    },
    editShipment() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.isEditing = true;
        } else {
          this.cachedUser = Object.assign({}, this.ruleForm);
          this.isEditing = false;
        }
      });
    },
    cancelEditShipment() {
      this.ruleForm = Object.assign({}, this.cachedUser);
      this.isEditing = false;
    },
  },
};
</script>
<style scoped>
.info {
  text-align: center;
  margin-bottom: 60px !important;
  border-radius: 10px;
}
.btn {
  background-color: #d3394c;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  position: relative;
  padding: 5% !important;
}
.el-select {
  width: 100% !important;
}
.flex {
  display: flex;
}
.row-bg {
  margin-bottom: 30px;
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
  height: 96% !important;
  width: 100% !important;
}
.for {
  margin-top: 25px !important;
  text-align: center !important;
  margin-left: auto !important ;
  margin-right: auto !important;
}
.image {
  width: 30% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-bottom: 15% !important;
}
.el-date-editor {
  width: 100% !important;
  margin-bottom: 11px !important;
}
.el-col {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.el-row {
  margin-left: auto !important;
  margin-right: auto !important;
}
.edit {
  margin-bottom: 8px !important;
  margin-left: auto !important ;
  margin-right: auto !important;
}
.cancel {
  margin-bottom: 5px !important;
  margin-left: auto !important ;
  margin-right: auto !important;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.add {
  border: 1px solid #ff8303 !important;
  padding: 20px !important;
  margin: 20px;
  margin-left: auto !important;
  margin-right: auto !important;
  border-radius: 10px !important;
  text-align: center !important;
  background-color: rgb(245, 245, 245) !important;
}
.all {
  margin-left: auto !important;
  margin-right: auto !important;
  width: 74% !important;
  margin-top: 20px !important;
  line-height: 10px !important;
  margin-bottom: 60px !important;
}
.cancel {
  margin-bottom: 5px !important;
  margin-left: 1% !important;
  margin-right: auto !important;
}
.img {
  width: 100%;
  height: 100%;
  border: 1px solid #f6f6f6;
  display: inline-block;
}
input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.hidden {
  display: none !important;
}
#change {
  font-size: 45px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 60px !important;
}
.el-row {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
