export const RoutePaths = {
  main: {
    name: "main",
    path: "/",
  },
  login: {
    name: "login",
    path: "/login",
  },
  registration: {
    name: "registration",
    path: "/registration",
  },
  notFound: {
    name: "notFound",
    path: "/404",
  },
};

export const routes = [
  {
    path: RoutePaths.login.path,
    name: RoutePaths.login.name,
    component: () => import("../modules/auth/login/LoginPage.vue"),
    meta: { layout: "default" },
  },
  {
    path: RoutePaths.registration.path,
    name: RoutePaths.registration.name,
    component: () => import("../modules/auth/registration/RegistrationPage.vue"),
    meta: { layout: "default" },
  },
  {
    path: RoutePaths.main.path,
    name: RoutePaths.main.name,
    component: () => import("../modules/diary/DiaryPage.vue"),
    meta: { layout: "application", requiresAuth: true },
  },
  {
    path: RoutePaths.notFound.path,
    name: RoutePaths.notFound.name,
    component: () => import("../modules/not-found/404.vue"),
    meta: { layout: "default" },
  },

  //LAST ROUTE
  { path: "/:pathMatch(.*)*", redirect: RoutePaths.notFound.path },
];
