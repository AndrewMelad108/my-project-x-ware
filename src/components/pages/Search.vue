<template>
  <div class="search">
    <h1>search</h1>
    <div class="form-search">
      <el-form class="demo-ruleForm">
        <el-form-item prop="name">
          <el-row :gutter="40">
            <el-col :lg="12" :xs="24">
              <el-date-picker
                v-model.trim="formSearch.form"
                placeholder="form"
                class="input"
              ></el-date-picker>
            </el-col>
            <el-col :lg="12">
              <el-date-picker
                v-model.trim="formSearch.to"
                placeholder="to"
                class="input"
              ></el-date-picker>
            </el-col>
          </el-row>
          <el-row :gutter="0" class="row-data">
            <el-col :lg="8">
              <el-date-picker
                v-model="formSearch.data"
                type="date"
                placeholder="Pick a day"
              >
              </el-date-picker>
            </el-col>

            <el-col :offset="4" :lg="6">
              <el-switch
                @change="changeType(formSearch.checkout)"
                v-model="formSearch.checkout"
                active-text="Shipments"
                inactive-text="Trips"
                active-color="#E6A23C"
                inactive-color="#000000"
              >
              </el-switch>
            </el-col>
            <el-col :lg="4">
              <el-button
                class="btn-search"
                type="info"
                icon="el-icon-search"
                round
                @click="search(formSearch.checkout)"
                >Search</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
    <hr />
    <!-- -------------------------------------get shipments ------------------------------ -->
    <el-row :gutter="20" no-body>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        class="products-shipment overflow-hidden"
        v-for="shipment in shipments"
        :key="shipment.index"
      >
        <b-card no-body>
          <b-row no-gutters>
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="img rounded-0"
            ></b-card-img>
            <b-col>
              <b-card-body class="text-center">
                <p class="title text-center">{{ shipment.product.name }}</p>
                <b-card-text>
                  <span class="for-data"> {{ shipment.from }}</span
                  ><i class="el-icon-right"></i>
                  <span class="to-data">{{ shipment.to }}</span>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col>
              <b-card-body class="user-detials">
                <el-row>
                  <el-col :span="4">
                    <b-img
                      :src="shipment.product.image"
                      class="image-user"
                      rounded="circle"
                      alt="Circle image"
                    ></b-img>
                  </el-col>
                  <el-col :span="16">
                    <el-rate
                      disabled
                      v-model="shipment.person.rate"
                      class="rate-users"
                    ></el-rate>
                  </el-col>
                  <el-col :span="4">
                    <el-button
                      class="btn-card"
                      type="warning"
                      round
                      @click="sendTrips"
                      >Send</el-button
                    >
                  </el-col>
                </el-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </el-col>
    </el-row>
    <!----------------------------------------- get trips ----------------------------------->
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        class="trip"
        v-for="trip in trips"
        :key="trip.index"
      >
        <b-card no-body>
          <b-row no-gutters>
            <b-col>
              <b-card-body>
                <b-card-text class="text-center">
                  <span class="for-data"> {{ trip.from }}</span
                  ><i class="el-icon-right"></i>
                  <span class="to-data">{{ trip.to }}</span>
                </b-card-text>
              </b-card-body>
              <b-card-footer>
                <el-row class="user-detials" :span="24">
                  <el-col :lg="4" :md="4" :sm="4" :xs="4">
                    <b-img
                      :src="trip.person.image"
                      class="image-user"
                      rounded="circle"
                      alt="Circle image"
                    ></b-img>
                  </el-col>
                  <el-col
                    :lg="16"
                    :md="16"
                    :sm="16"
                    :xs="16"
                    class="rate-users-trips"
                  >
                    <el-rate v-model="trip.person.rate" disabled></el-rate>
                  </el-col>
                  <el-col :lg="4" :md="4" :sm="4" :xs="4">
                    <el-button
                      class="btn-card"
                      type="warning"
                      round
                      @click="sendShipments"
                      >Send
                    </el-button>
                  </el-col>
                </el-row>
              </b-card-footer>
            </b-col>
          </b-row>
        </b-card>
      </el-col>
    </el-row>
    <model
      :type="type"
      :openModel="openModel"
      @openModel="openModel = $event"
    ></model>
  </div>
</template>
<script>
// import axios from "axios";
import model from "../pages/ModelPage";

export default {
  data() {
    return {
      formSearch: {
        from: "",
        to: "",
        data: "",
        checkout: true,
      },
      openModel: false,
      type: "",
      shipments: [],
      trips: [],
    };
  },
  components: {
    model,
  },
  created() {
    this.getShipments();
  },

  methods: {
    getShipments() {
      this.shipments = [
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          from: "asd1",
          to: "asd2",
          person: {
            rate: 1,
            name: "zzz",
          },
          product: {
            name: "sss",
            image: "https://picsum.photos/400/400/?image=20",
          },
        },
      ];
    },
    getTrips() {
      this.trips = [
        {
          from: "qqq",
          to: "qqq",
          person: {
            name: "asd",
            image: "https://picsum.photos/400/400/?image=20",
            rate: 3,
          },
        },
        {
          from: "qqq",
          to: "qqq",
          person: {
            name: "asd",
            image: "https://picsum.photos/400/400/?image=20",
            rate: 3,
          },
        },
        {
          from: "qqq",
          to: "qqq",
          person: {
            name: "asd",
            image: "https://picsum.photos/400/400/?image=20",
            rate: 3,
          },
        },
        {
          from: "qqq",
          to: "qqq",
          person: {
            name: "asd",
            image: "https://picsum.photos/400/400/?image=20",
            rate: 3,
          },
        },
        {
          from: "qqq",
          to: "qqq",
          person: {
            name: "asd",
            image: "https://picsum.photos/400/400/?image=20",
            rate: 2,
          },
        },
        {
          from: "qqq",
          to: "qqq",
          person: {
            name: "asd",
            image: "https://picsum.photos/400/400/?image=20",
            rate: 5,
          },
        },
      ];
    },
    search(value) {
      this.changeType(value);
    },
    sendShipments() {
      this.openModel = true;
      this.type = "trips";
    },
    sendTrips() {
      this.openModel = true;
      this.type = "Shipments";
    },
    changeType(value) {
      if (value == true) {
        this.getShipments();
        this.trips = [];
      } else {
        this.shipments = [];
        this.getTrips();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.el-rate__icon,
.el-rate__item {
  // margin-right: 0px !important;
  margin-bottom: 6% !important;
  margin-left: 4% !important;
}
//start search page
.search {
  // start form search section

  padding: 10px;
  margin-left: 30px;

  width: 100% !important;
  height: 100%;
  margin-bottom: 50px;

  .input {
    width: 100%;
  }
  .row-data {
    margin-top: 20px;
  }
  .btn-search {
    padding: 8px;
    color: black;
    border: 2px solid black;
    width: 100%;
    font-size: 22px;
    background-color: #0000;
    transition: 0.7s all ease-in-out;
    &:hover {
      background: black;
      color: #ffe968;
    }
  }
  //end form ssearch section
  //start get shipments section
  .products-shipment {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;

    margin-bottom: 25px;
    .for-data {
      margin-right: 10px;
      font-weight: bold;
    }
    .to-data {
      margin-left: 15px;
      font-weight: bold;
    }
    .img {
      height: 20%;
      width: 35%;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .user-detials {
      padding: 0;
      position: relative;
      .btn-card {
        position: absolute;
        right: 3%;
        bottom: 25%;
        width: 35%;
        font-size: 10px;
        padding: 4%;
        text-align: center;
        transition: 0.45s;
        font-weight: bold;
        &:hover {
          background: black;
          color: "#fff";
        }
      }
      .rate-users {
        margin-left: 25px !important;
        margin-top: 15px !important;
      }
      .image-user {
        width: 92%;
        margin-bottom: 10px;
        margin-left: 10%;
      }
    }
  }
  //end shipments section
  .trip {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    .for-data {
      margin-right: 0;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
    .to-data {
      margin-left: 15px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
    .btn-card {
      position: absolute;
      right: 0;
      bottom: 15%;
      transition: 0.45s;
      &:hover {
        background: black;
        color: "#fff";
      }
    }
    .image-user {
      width: 50%;
      margin: 10px 10px 10px 0;
    }
    .rate-users-trips {
      margin-top: 20px !important;
      margin-left: 5px !important;
    }
  }
}

/****************************************Start Media Query Section************************/
@media (max-width: 767px) /*phones and tabltes*/ {
  // start form search

  .search {
    margin-left: 0;

    .input {
      margin-bottom: 10px;
    }
    .btn-search {
      margin-top: 15px;
      width: 50%;
      font-size: 15px;
      font-weight: none;
      margin: 0 0 0 80px;
    }
    .products-shipment {
      .btn-card {
        position: absolute;
        right: 0;
        margin: 11px 11px;
        transition: 0.45s;
        bottom: 4% !important;
        width: 28% !important;
      }
      .user-detials {
        .image-user {
          width: 70% !important;
          margin-bottom: 10px !important;
          margin-left: 9% !important;
        }
        .rate-users {
          margin-left: 4px !important;
          margin-top: 4px !important;
        }
      }
    }
    .trip {
      el-rate {
        height: 20px;
        line-height: 1;
        margin-left: 19%;
      }
      .btn-card {
        bottom: 30%;
        right: -5%;
        width: 70px;
      }
      .image-user {
        width: 100% !important;
        margin: 15px 4px 4px -6px !important;
      }

      .rate-users-trips {
        font-size: 3px !important;
        margin-bottom: 30px !important;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) /*small screen*/ {
  .search {
    .input {
      margin-bottom: 10px;
    }
    .btn-search {
      margin-top: 15px;
      width: 50%;
      font-size: 15px;
      font-weight: none;
      margin: 0 0 0 80px;
    }
    .btn-card {
      width: 21% !important;
      font-size: 15px !important;
      padding: 3% !important;
    }
    .user-detials {
      .image-user {
        margin-left: 8% !important;
        .el-col-24 {
          width: 0% !important;
        }
      }
      .rate-users {
        margin-left: 20% !important;
        font-size: 25px !important;
      }
    }
    .trip {
      .image-user {
        width: 90% !important;
        padding: 0 !important;
      }

      .rate-users-trips {
        font-size: 3px !important;
        margin-bottom: 20px !important;
      }
    }
  }
}
@media (min-width: 991px) and (max-width: 1199px) /*medium screen*/ {
  .search {
    .input {
      margin-bottom: 1%;
    }
    .btn-search {
      margin-top: 15px;
      width: 30%;
      font-size: 15px;
      font-weight: none;
      margin: 0 0 0 35%;
    }
  }
}
/**************************************** End Media Query Section************************/
</style>
