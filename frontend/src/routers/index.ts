import { createRouter, createWebHistory, } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login/Login.vue")
    },
    {
      name: "layout",
      path: "/",
      component: () => import("@/components/Layout/Layout.vue"),
      children: [
        {
          path: "",
          redirect: "/home",
        },
        {
          name: "home",
          path: "home",
          component: () => import("@/views/Home/Home.vue")
        },
        {
          name: "qa",
          path: "qa",
          component: () => import("@/views/Qa/Qa.vue")
        },
        {
          name: "mine",
          path: "mine",
          component: () => import("@/views/Mine/Mine.vue")
        },
        {

          name: "video",
          path: "video",
          component: () => import("@/views/Video/Video.vue")

        }
      ]
    }
  ]
});
export default router