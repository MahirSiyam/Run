import {
    createBrowserRouter
  } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import CardDetails from "../components/CardDetails";

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
        }
      ]
    },
  ]);

  export default router;