<template>
  <div class="modelPage">
    <el-dialog :title="type" :visible.sync="openModel" width="40%" center>
      <span
        >It should be noted that the content will not be aligned in center by
        default</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="Confirm">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["openModel", "type"],
  data() {
    return {};
  },

  methods: {
    Confirm() {
      this.openModel = true;
      this.$router.push({ name: "search" });
    },
    close() {
      this.openModel = false;
      this.$emit("openModel", this.openModel);
    },
  },
};
</script>

<style scoped lang="scss"></style>
