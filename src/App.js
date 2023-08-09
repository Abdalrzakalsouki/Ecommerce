import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProdcutDetails from "./pages/ProdcutDetails";
import FavouriteProducts from "./pages/FavouriteProducts";
import { FavouriteProvider } from "./utils/FavouriteContext";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <ProdcutDetails />,
    },
    {
      path: "/favourites",
      element: <FavouriteProducts />,
    },
  ]);
  return (
    <div>
      <FavouriteProvider>
        <RouterProvider router={routes}>
          <Home />
        </RouterProvider>
      </FavouriteProvider>
    </div>
  );
};

export default App;
