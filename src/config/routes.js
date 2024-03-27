import App from "../pages/App";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/login/LoginIndex";
import BlankLayout from "../layouts/BlankLayout";

const Router = createBrowserRouter([
    {
      path: "/",
      Component: App,
    },
    {
        path: "/about",
        element: <div>About page</div>,
    },
    {
        Component: BlankLayout,
        path: "/login",
        children: [
          {
            index: true,
            Component: Login,
          },
          {
            path: "forgot-password",
            Component: () => <div>Forgot password page</div>,
          },
        ],
    }
  ]);

export default Router;
