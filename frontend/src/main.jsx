import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Dashboard/Cart.jsx";
import Favorites from "./pages/Dashboard/Favorites.jsx";
import PurchaseHistory from "./pages/Dashboard/PurchaseHistory.jsx";
import ManageProfile from "./pages/Dashboard/ManageProfile.jsx";
import Notifications from "./pages/Dashboard/Notifications.jsx";
import Dashboard from "./layouts/Dashboard.jsx";
import Authentication from "./pages/Authentication/Authentication.jsx";
import FAQ from "./pages/FAQ.jsx";
import AddListing from "./pages/AddListing.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/product",
    element: <ProductDetails />,
  },
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/add",
    element: <AddListing />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element: <ManageProfile />,
      },
      {
        path: "history",
        element: <PurchaseHistory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
