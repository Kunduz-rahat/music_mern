import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Регистрация
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Password
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Подтвердить
          </button>
          <Link className="flex justify-center items-center text-gray-600 font-semibold mt-2" to='/login'>
            Уже зарегистрированы ?
          </Link>
        </div>
      </form>
    </div>
  );
};
