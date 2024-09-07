import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { id, image_url, publisher, title } = item;
  return (
    <div>
      <div className="flex flex-col  p-5 rounded-xl bg-white/70 shadow-2xl shadow-gray-500 hover:shadow-black gap-5 ">
        <div className="md:h-56 flex justify-center overflow-hidden items-center rounded-xl">
          <img src={image_url} alt={title} className="block w-full" />
        </div>

        <span className="text-teal-500 font-semibold md:text-2xl text-xl">
          {publisher}
        </span>
        <span className="md:text-3xl text-2xl font-semibold truncate">
          {title}
        </span>
        <Link to={`/details/${id}`}>
          <button className="md:p-3 px-3 py-1 w-full bg-black text-white uppercase text-2xl rounded-3xl">
            Recipe Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
