import React from "react";
import Navber from "../components/Navber";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navber></Navber>
      </header>

      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
