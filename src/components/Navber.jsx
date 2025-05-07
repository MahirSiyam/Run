import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo-sheet-sports-equipment-store-abstract-symbol_1084789-366-removebg-preview.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="navbar bg-orange-100 shadow-sm bg-linear-to-r from-orange-50 to-orange-100 border-b-2 border-orange-50 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>

            <li>
              <NavLink to={`/my_profile`}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-[70px]" src={logo} alt="" />
          <a className=" text-xl font-bold">
            <span className=" text-4xl font-bold text-orange-600">R</span>un.
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li>
            <NavLink to={`/`} className={`font-bold text-gray-900`}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={`/my_profile`} className={`font-bold text-gray-900`}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">

        <div className="tooltip tooltip-bottom" data-tip={user ? user.email : ""}>
          <div className="avatar cursor-pointer">
            <div className="w-13 rounded-full">
              <img src={user ? user.photoURL : "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"} alt="" />
            </div>
          </div>
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-orange-500 border-0 shadow-none font-bold text-gray-900"
            S
          >
            Logout
          </button>
        ) : (
          <Link
            to={`/auth/login`}
            className="btn bg-orange-500 border-0 shadow-none font-bold text-gray-900"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
