import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    component: () => import("../views/Layout.vue"),
    children: [
      {
        path: "/shipments",
        name: "shipments",
        component: () => import("../views/Shipments.vue"),
      },
      {
        path: "/shipments/:id",
        name: "shipment",
        component: () => import("../views/Shipment.vue"),
      },
      {
        path: "/trips",
        name: "trips",
        component: () => import("../components/pages/Trips.vue"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/add-trip",
        name: "add-trip",
        component: () => import("../views/AddTrip.vue"),
      },
      {
        path: "/search",
        name: "search",
        component: () => import("../components/pages/Search.vue"),
        meta: {
          requireAuth: true,
        },
        
      },
      {
        path: "/Profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
        meta: {
          requireAuth: true,
        },
        
      },
      {
        path: "/add-shipment",
        name: "add-shipment",
        component: () => import("../views/AddShipment.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "error",
    component: () => import("../views/Error.vue"),
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!store.getters.authToken) {
      router.push({ path: "/login" });
    }
  }
  return next();
});
export default router;
