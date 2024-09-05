import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/furniture.jpg";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/products"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/categories"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Categories
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/custom"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Custom
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/blog"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <img
            className="w-[15%] rounded-full bg-blue-500"
            src={image}
            alt="furniture"
          />
          <h1 className="text-xl md:text-3xl font-bold">
            Furni<span className="text-blue-500">Flex</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-3">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex-none flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-md indicator-item bg-blue-600 text-white">
                    0
                  </span>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
