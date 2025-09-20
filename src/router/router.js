import { createWebHistory, createRouter } from "vue-router";
import { RoutePaths, routes } from "./routes";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuth) {
    return { name: RoutePaths.login.name };
  }
  if (authStore.isAuth && (to.name === RoutePaths.login.name || to.name === RoutePaths.registration.name)) {
    return { name: RoutePaths.main.name };
  }
});

export default router;
