import { createRouter, createWebHistory, } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: () => ({ name: "login" })
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login/Login.vue")
    }
  ]
});
export default router