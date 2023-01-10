<template>
  <div class="shipments">
    <div class="header">
      <h2>Shipments</h2>
      <el-button
        class="add-button"
        type="primary"
        shift-h="8"
        icon="el-icon-plus"
        circle
        @click="addShipment()"
      ></el-button>
    </div>
    <el-row :gutter="20">
      <el-col
        :span="8"
        v-for="(shipment, id) in shipments"
        :key="id"
        class="shipment"
        :xs="24"
        :sm="10"
        :md="8"
        :lg="8"
      >
        <button class="card-button" @click="shipmentInfo()">
          <b-card no-body class="shipment-content">
            <b-row>
              <b-card-img
                :src="shipment.product.photo"
                alt="Image"
                class="img rounded-0"
              ></b-card-img>
              <b-col>
                <b-card-body class="text-center">
                  <p class="title text-center">{{ shipment.product.name }}</p>
                  <b-card-text class="for-text-center">
                    <span class="for-data"> {{ shipment.from }}</span
                    ><i class="el-icon-arrow-right"></i>
                    <span class="to-data">{{ shipment.to }}</span>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from "../apis.js";
export default {
  data() {
    return {
      shipments: [
        {
          id: 1,
          from: "Dubai",
          to: "Cairo",
          product: {
            name: "IPhone X",
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          id: 2,
          from: "London",
          to: "Assuit",
          product: {
            name: "Bags",
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          id: 3,
          from: "England",
          to: "Cairo",
          product: {
            name: "Camera",
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          id: 4,
          from: "Dubai",
          to: "Assuit",
          product: {
            name: "IPhone 12",
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          id: 5,
          from: "Dubai",
          to: "Assuit",
          product: {
            name: "Ipad",
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          id: 6,
          from: "Dubai",
          to: "Assuit",
          product: {
            name: "T-shirt",
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
      ],
    };
  },
  methods: {
    addShipment() {
      this.$router.push({ name: "add-shipment" });
    },
    shipmentInfo() {
      this.$router.push({ name: "shipment", params: { id: 1 } });
    },
    // getshipments() {
    //   //  axios.get("link").then((res)=>{
      //this.shipments = res.data
    //   //  })
    // },
  },
  // created() {
  //   this.getshipments();
  // },
};
</script>
<style scoped>
.shipments {
  padding: 20px;
}
.card-button {
  background-color: white !important;
  padding: 0px !important;
  border: 0px !important;
}
.title {
  margin-bottom: 12px;
}
.shipment {
  padding: 10px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  border-radius: 10px !important;
  text-align: center !important;
  margin-bottom: 30px !important;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.shipment-content {
  border: 1px solid black !important;
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
.header {
  display: flex;
}
.card-body {
  padding: 6px;
  flex: 1 1 auto;
}
.image-user {
  width: 92% !important;
  margin-bottom: 10px !important;
  margin-left: 10% !important;
}
.img {
  height: 20%;
  width: 35%;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
}
@media (min-width: 768px) and (max-width: 991px) {
  .card-body {
    max-height: 100px;
  }
  .shipments {
    margin-bottom: 50px !important;
  }
  .for-text-center {
    margin-left: -34px;
  }
}
@media (min-width: 991px) and (max-width: 1199px) /*medium screen*/ {
  .card-body {
    max-height: 100px;
  }
  .for-text-center {
    margin-left: -31px;
  }
  .shipments {
    margin-bottom: 50px !important;
  }
}
@media (min-width: 1200px) and (max-width: 1300) /*lager screen*/ {
  .card-body {
    max-height: 50px;
  }
  .for-text-center {
    margin-left: 10px;
  }
}
@media (min-width: 300) and (max-width: 550px) /*phones and tabltes*/ {
  .card-body {
    max-height: 100px;
  }
  .for-text-center {
    margin-left: 11px;
  }
  .shipments {
    margin-bottom: 86px !important;
  }
}
</style>
