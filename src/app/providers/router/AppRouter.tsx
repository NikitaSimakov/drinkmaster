import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./config/constants";
import SharedLayout from "../../SharedLayout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <p>Welcome page</p>,
      index: true,
    },
    {
      path: ROUTE_CONSTANTS.SIGN_UP.path,
      element: <p>SIGN UP</p>,
    },
    {
      path: ROUTE_CONSTANTS.SIGN_IN.path,
      element: <p>SIGN IN</p>,
    },
    {
      path: ROUTE_CONSTANTS.ROOT.path,
      element: <SharedLayout />,
      children: [
        { path: ROUTE_CONSTANTS.MAIN.path, element: <p>MAIN</p> },
        {
          path: ROUTE_CONSTANTS.DRINKS.path,
          element: <p>DRINKS</p>,
          children: [
            {
              path: ROUTE_CONSTANTS.CATEGORY.path,
              element: <p>Cateogry Name</p>,
            },
          ],
        },
        { path: ROUTE_CONSTANTS.ADD_RECIPE.path, element: <p>Add recipe</p> },
        { path: ROUTE_CONSTANTS.MY_RECIPES.path, element: <p>My recipes</p> },
        { path: ROUTE_CONSTANTS.FAVORITE.path, element: <p>Favorites</p> },
        { path: ROUTE_CONSTANTS.RECIPE_PAGE.path, element: <p>RecipeId</p> },
        { path: "*", element: <p>Not Found</p> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
