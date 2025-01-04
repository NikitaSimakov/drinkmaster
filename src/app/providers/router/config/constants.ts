export const ROUTE_CONSTANTS = {
  ROOT: { path: "/", ruTitle: "Главная" },
  SIGN_IN: { path: "/signin", ruTitle: "Авторизация" },
  SIGN_UP: { path: "/signup", ruTitle: "Регистрация" },
  MAIN: { path: "main", ruTitle: "Главная" },
  DRINKS: { path: "/drinks", ruTitle: "Напитки" },
  CATEGORY: { path: ":categoryName", ruTitle: "Категория" },
  ADD_RECIPE: { path: "add", ruTitle: "Добавить рецепт" },
  MY_RECIPES: { path: "my_recipes", ruTitle: "Мои рецепты" },
  FAVORITE: { path: "favorite", ruTitle: "Избранное" },
  RECIPE_PAGE: { path: "recipe/:recipeId", ruTitle: "Пользователи" },
  NOT_FOUND: { path: "*", ruTitle: "Не найдено" },
} as const;
