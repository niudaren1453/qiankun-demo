import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: import("@/views/view-main.vue"),
  },
  {
    path: "/app-vite/:morePath*",
    component: () => import("@/components/micro-wrapper.vue"),
  },
//   {
//     path: "/app-seed/:morePath*",
//     component: () => import("@/components/micro-wrapper.vue"),
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
