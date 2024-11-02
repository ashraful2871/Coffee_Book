import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../Components/CoffeeCards";
import CoffeeDetail from "../pages/CoffeeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetail></CoffeeDetail>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
export default router;
