import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      id="header"
      className="w-full z-30 top-10 py-1bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 "
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <div className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <NavLink
                className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                to="#"
              >
                Albums
              </NavLink>
              <NavLink
                className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                to="#"
              >
                About
              </NavLink>
            </div>
          </nav>
        </div>

        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <Link to='/login' className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
              ??????????
            </Link>
            <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
              ??????????
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
