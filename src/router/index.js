import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const routes = [
  {
    path: "/",
    component: () => import("../pages/business.vue"),
    redirect: "/home",
    children: [
      { path: "/home", component: () => import("../pages/home.vue") },
      {
        path: "/categories",
        component: () => import("../pages/categories.vue"),
      },
      { path: "/publish", component: () => import("../pages/publish.vue") },
      {
        path:'/item/:id',component:()=>import("../pages/detail.vue")
      }
     
    ],
  },
  {
    path: "/login",
    component: () => import("../pages/login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  NProgress.start();
});
router.beforeResolve(() => {
  NProgress.done();
});
export default router;
