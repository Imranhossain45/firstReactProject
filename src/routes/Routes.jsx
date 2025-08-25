import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../components/Home";
import Product from "../components/pages/Product";
import Blogs from "../components/pages/Blogs";
import Contact from "../components/pages/Contact";
import { About } from "../components/pages/About";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Product,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
export default router;
