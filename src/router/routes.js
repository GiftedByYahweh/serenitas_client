export const RoutePaths = {
  main: {
    name: "main",
    path: "/",
  },
  portfolio: {
    name: "portfolio",
    path: "/portfolio",
  },
  about: {
    name: "about",
    path: "/about",
  },
  price: {
    name: "price",
    path: "/price",
  },
};

export const routes = [
  {
    path: RoutePaths.main.path,
    name: RoutePaths.main.name,
    component: () => import("../modules/diary/DiaryPage.vue"),
  },
];
