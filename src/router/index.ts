import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/add-task",
    name: "AddTask",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddTask.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
