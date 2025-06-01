import React from "react";
import Navber from "../components/Navber";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="w-11/12 mx-auto">
          <Navber />
        </div>
      </div>
      <div className="pt-20 w-11/12 mx-auto mb-2">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;
