import Money from "@/views/Money.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/Not_Found.vue";
import EditLabels from "@/views/EditLabels.vue";

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
    path: "/labels",
    component: Labels,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
  {
    path: "/labels/edit/:id",
    component: EditLabels,
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
