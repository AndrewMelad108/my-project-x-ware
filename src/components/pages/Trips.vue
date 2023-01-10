<template>
  <div class="Trips">
    <div class="header">
      <h2>Trips</h2>
      <el-button
        class="add-button"
        type="primary"
        shift-h="8"
        icon="el-icon-plus"
        circle
        @click="addShipment()"
      ></el-button>
    </div>

    <el-row class="Trips" :gutter="20">
      <el-col
        :lg="7"
        :md="11"
        :sm="11"
        :xs="24"
        class="Trips-items"
        v-for="trip in trips"
        :key="trip.index"
      >
        <!-- start one row -->
        <el-row :gutter="5" class="space text-center">
          <el-col :lg="10" :md="10" :xs="10" :sm="10" class="from-data">{{
            trip.from
          }}</el-col>
          <el-col :lg="4" :md="4" :xs="4" :sm="4">
            <i class="el-icon-right"></i>
          </el-col>

          <el-col :lg="10" :md="10" :xs="10" :sm="10" class="to-data">{{
            trip.to
          }}</el-col>
        </el-row>
        <!-- start two row -->
        <el-row :gutter="5" class="space text-center">
          <p class="date">Departs on MM HH DD MM</p>
        </el-row>
        <!-- start three row -->
        <el-row :gutter="5" class="space">
          <el-col :lg="12" :md="12" :xs="12" :sm="12">
            <el-col :lg="2" :md="2" :xs="2" :sm="2" class="icon text-center">
              <i class="el-icon-shopping-cart-1"></i>
            </el-col>
            <el-col :lg="10" :md="10" :xs="10" :sm="10">
              <span class="items-weight"
                >{{ trip.weight }}<span class="weight-unit">kg</span>
              </span>
            </el-col>
          </el-col>
          <el-col :lg="12" :md="12" :xs="12" :sm="12">
            <el-col :lg="4" :md="4" :xs="4" :sm="4" class="icon text-center">
              <i class="el-icon-s-goods"></i>
            </el-col>
            <el-col :lg="8" :md="8" :xs="8" :sm="8">
              <span class="items-weight">{{ trip.price }}</span>
            </el-col>
          </el-col>
        </el-row>
        <!-- start four row -->
        <el-row class="space" no-gutter>
          <el-col :lg="4" :md="4" :xs="4" :sm="4" class="icon text-center">
            <i class="el-icon-loading icon-load"></i>
          </el-col>
          <el-col :lg="2" :md="2" :xs="2" :sm="2">
            <span class="number-deal">{{ trip.deals }}</span>
          </el-col>
          <el-col :lg="14" :md="14" :xs="14" :sm="14">
            <span class="deals">coniremd deals</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Trips",
  data() {
    return {
      trips: [
        {
          from: "asd1",
          to: "asd1",
          date: "date1",
          weight: "1",
          price: "1",
          deals: "1",
        },
        {
          from: "asd2",
          to: "asd2",
          date: "date2",
          weight: "2",
          price: "2",
          deals: "2",
        },
        {
          from: "asd3",
          to: "asd3",
          date: "date3",
          weight: "3",
          price: "3",
          deals: "3",
        },
      ],
    };
  },
  methods: {
    addShipment() {
      this.$router.push({ name: "add-trip" });
    },
  },
};
</script>

<style scoped lang="scss">
.Trips {
  height: 100%;
  width: 100%;
  margin-left: 10px;
  padding: 20px;
  margin-bottom: 30px;

  .header {
    display: flex;
  }
  .add-button {
    margin-left: auto;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .Trips-items {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    // width: 30%;
    height: auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 10px 10px 10px;
    .space {
      margin-top: 20px;
      margin-left: 10px;
    }
    .from-data,
    .to-data {
      font-size: 20px;
      font-weight: bold;
      text-transform: capitalize;
    }

    .icon {
      font-size: 30px;
      cursor: pointer;
      margin-left: 20px;
      &:hover {
        color: rgb(225, 193, 7);
      }
    }
    .icon-load {
      font-size: 40px;
      cursor: pointer;
      margin-bottom: 10px;
    }

    .date {
      font-size: 20px;
      text-transform: capitalize;
    }
    .items-weight {
      font-size: 25px;
      text-transform: uppercase;
      font-weight: bold;
      padding-left: 20px;
      .weight-unit {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 25px;
        padding-left: 3px;
      }
    }

    .number-deal {
      font-size: 25px;
      font-weight: bold;
    }
    .deals {
      padding-left: 3%;
      text-transform: capitalize;
      font-size: 18px;
      padding-top: 6%;
    }
  }
}
</style>
