import { createRouter, createWebHistory } from "vue-router";
import DemoView from "../views/DemoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DemoView,
    },
    {
      path: "/code",
      name: "code",
      component: () => import("../views/CodeView.vue"),
    },
    {
      path: "/sandbox",
      name: "sandbox",
      component: () => import("../views/SandboxView.vue"),
    },
  ],
});

export default router;
