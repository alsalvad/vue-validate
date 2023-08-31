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
      path: "/sobre",
      name: "sobre",
      component: () => import("../views/SobreView.vue"),
    },
    {
      path: "/sandbox",
      name: "sandbox",
      component: () => import("../views/SandboxView.vue"),
    },
  ],
});

export default router;
