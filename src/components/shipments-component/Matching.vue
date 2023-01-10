<template>
  <div class="matching">
    <el-row :gutter="50" no-body>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        class="products-shipment overflow-hidden"
        v-for="shipment in shipments"
        :key="shipment.id"
      >
        <b-card no-body>
          <b-row>
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="img rounded-0"
            ></b-card-img>
            <b-col>
              <b-card-body class="text-center">
                <p class="title text-center">{{ shipment.name }}</p>
                <b-card-text class="text-center">
                  <span class="for-data" id="for"> {{ shipment.from }}</span
                  ><i class="el-icon-arrow-right"></i>
                  <span class="to-data">{{ shipment.to }}</span>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
          <hr />
          <b-row :gutter="50">
            <b-col>
              <b-card-body class="user-detials">
                <el-row>
                  <el-col :span="4">
                    <b-img
                      :src="shipment.product.photo"
                      class="image-user"
                      rounded="circle"
                      alt="Circle image"
                    ></b-img>
                  </el-col>
                  <el-col :span="16">
                    <el-rate
                      disabled
                      v-model="shipment.rate"
                      class="rate-users"
                    ></el-rate>
                  </el-col>
                  <el-col :span="4">
                    <el-button class="btn-card" type="warning">Send</el-button>
                  </el-col>
                </el-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      shipments: [
        {
          id: 1,
          rate: 1,
          from: "Dubai",
          to: "Cairo",
          name: "George",
          product: {
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          id: 3,
          rate: 1,
          from: "Dubai",
          to: "Cairo",
          name: "George",
          product: {
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
        {
          id: 2,
          from: "London",
          to: "Assuit",
          rate: 3,
          name: "Ahmed",
          product: {
            photo: "https://picsum.photos/400/400/?image=20",
          },
        },
      ],
    };
  },
  mounted: {
    //   axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response.data.bpi))
    //   .catch(error => this.$message.error('Oops, This is an error.'))
  },
};
</script>
<style scoped>
.matching {
  border-radius: 10px;
}
.products-shipment {
  margin-bottom: 15px !important;
}
.for-data {
  font-weight: bold !important;
}
.to-data {
  font-weight: bold !important;
}
.user-detials {
  padding: 0 !important;
  position: relative !important;
}
.btn-card {
  position: absolute !important;
  right: 1% !important;
  bottom: 25% !important;
  width: 35% !important;
  padding: 4% !important;
  text-align: center !important;
  transition: 0.45s !important;
  font-weight: bold !important;
}
btn-card:hover {
  background: black !important;
  color: "#fff" !important;
}
.image-user {
  width: 100% !important;
  margin-bottom: 10px !important;
  margin-left: 9% !important;
}
.card {
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  min-width: 0 !important;
  word-wrap: break-word !important;
  background-color: #fff !important;
  background-clip: border-box !important;
  border: 1px solid rgba(0, 0, 0, 0.125) !important;
  border-radius: 0.25rem !important;
  margin: 3px !important;
}
.img {
  height: 20%;
  width: 35%;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
}
.rate-users {
  margin-left: 4px !important;
  margin-top: 4px !important;
}
@media (min-width: 1000px) and (max-width: 1199px) {
  .rate-users {
    font-size: 29px !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) /*small screen*/ {
  .image-user {
    margin-left: 8% !important;
  }
  .rate-users {
    font-size: 25px !important;
  }
  .matching {
    margin-bottom: 50px !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) /*small screen*/ {
  .btn-card {
    font-size: 15px !important;
  }
  .image-user {
    margin-left: 8% !important;
  }

  .rate-users {
    font-size: 25px !important;
  }
}
</style>
