import Money from "@/views/Money.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Lables from "@/views/Lables.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/Not_Found.vue";
import EditLables from "@/views/EditLables.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/money",
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/lables",
    component: Lables,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
  {
    path: "/lables/edit/:id",
    component: EditLables,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
