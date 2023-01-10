<template>
  <div class="all">
    <div class="shipment-page">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/shipments' }"
          >Shipments</el-breadcrumb-item
        >
        <el-breadcrumb-item>Shipment Name</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="Matching Trips" name="first"
          ><Matching
        /></el-tab-pane>
        <el-tab-pane label="Info" name="last"><Info /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Info from "../components/shipments-component/Info";
import Matching from "../components/shipments-component/Matching";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    Matching,
    Info,
  },
};
</script>
<style>
.all {
  padding: 30px;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100% !important;
  line-height: 10px !important;
  margin-bottom: 60px !important;
}
.tabs {
  margin-right: auto !important;
  margin-left: auto !important;
  margin-top: 20px !important;
  padding: 20px;
  border-radius: 10px;
}
.shipment-page {
  font-size: 60px !important;
}
</style>
