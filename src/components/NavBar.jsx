import React, { useContext } from "react";
import { FoodContext } from "../context/Context";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmitButton } =
    useContext(FoodContext);
  return (
    <div>
      <div className="flex text-4xl gap-20 justify-around m-10 items-center">
        <h1 className="text-5xl font-bold">Food Recipe Api</h1>
        <form onSubmit={handleSubmitButton}>
          <input
            onChange={(e) => setSearchParam(e.target.value)}
            value={searchParam}
            type="text"
            placeholder="Search Recipe"
            className="outline-none shadow-lg bg-white/75 shadow-red-100 lg:w-[500px] focus:shadow-red-200 text-2xl rounded-full p-3 px-8 "
          />
        </form>
        <div className="flex gap-5 h-full">
          <NavLink to="/">
            {({ isActive }) => (
              <button
                className={
                  isActive
                    ? `bg-black text-white rounded-full px-8 py-2 hover:shadow-lg hover:shadow-black`
                    : `bg-gray-500 text-white rounded-full px-8 py-2 hover:shadow-lg hover:shadow-gray-500`
                }
              >
                Home
              </button>
            )}
          </NavLink>

          <NavLink to="/favorites">
            {({ isActive }) => (
              <button
                className={
                  isActive
                    ? `bg-black text-white rounded-full px-8 py-2 hover:shadow-lg hover:shadow-black`
                    : `bg-gray-500 text-white rounded-full px-8 py-2 hover:shadow-lg hover:shadow-gray-500`
                }
              >
                Favorites
              </button>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
