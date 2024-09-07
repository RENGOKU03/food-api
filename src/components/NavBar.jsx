import React, { useContext } from "react";
import { FoodContext } from "../context/Context";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmitButton } =
    useContext(FoodContext);
  return (
    <div>
      <div className="flex flex-col md:flex-row text-4xl gap-5 md:gap-6 justify-around md:mt-10 mt-2 mx-3  items-center ">
        <Link to={"/"}>
          <img src="/./Logo.png" alt="logo" className="h-20" />
        </Link>
        <form onSubmit={handleSubmitButton}>
          <input
            onChange={(e) => setSearchParam(e.target.value)}
            value={searchParam}
            type="text"
            placeholder="Search Recipe"
            className="outline-none shadow-lg bg-white/75 shadow-red-100 w-full md:w-60 focus:shadow-red-200 text-2xl rounded-full p-3 px-8 "
          />
        </form>
        <div className="flex md:gap-5 gap-2 h-full text-3xl">
          <NavLink to="/">
            {({ isActive }) => (
              <button
                className={
                  isActive
                    ? `bg-black text-white rounded-full px-2 py-1 md:px-8 md:py-2 hover:shadow-lg hover:shadow-black`
                    : `bg-gray-500 text-white rounded-full px-2 py-1 md:px-8 md:py-2 hover:shadow-lg hover:shadow-black`
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
                    ? `bg-black text-white rounded-full px-2 py-1 md:px-8 md:py-2 hover:shadow-lg hover:shadow-black`
                    : `bg-gray-500 text-white rounded-full px-2 py-1 md:px-8 md:py-2 hover:shadow-lg hover:shadow-black`
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
