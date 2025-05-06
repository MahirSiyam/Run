import {
    createBrowserRouter
  } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import CardDetails from "../components/CardDetails";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path: "/card_details/:id",
            element: <CardDetails></CardDetails>,
            loader: () => fetch('/data.json')
        },
        {
            path: "/my_profile",
            element: <MyProfile></MyProfile>
        },
      ]
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>
        },
        {
          path: "/auth/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/*",
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;