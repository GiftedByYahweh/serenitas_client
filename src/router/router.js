import { createWebHistory, createRouter } from "vue-router";
import { RoutePaths, routes } from "./routes";

const isAuth = false;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuth) {
    return { name: RoutePaths.login.name };
  }
  if (isAuth && (to.name === RoutePaths.login.name || to.name === RoutePaths.registration.name)) {
    return { name: RoutePaths.main.name };
  }
});

export default router;
