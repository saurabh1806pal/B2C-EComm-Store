// React and Router Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// CSS Import
import "./index.css";

// Component Imports
import App from "./App.jsx";
import ItemList from "./components/HomeItemList.jsx";
import Profile from "./components/Profile.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Bag from "./components/Bag.jsx";

// Data Fetching Function via API
import { fetchProductData } from "./data/fetchProductData.js";

// Data Imports
import items from "./data/items-Cart.js";
import myntraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ItemList />,
        loader: fetchProductData,
      },
      {
        path: "/home",
        element: <ItemList items={items} />,
        loader: fetchProductData,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
