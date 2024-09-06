import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../context/Context";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const Details = () => {
  const { recipeDetails, setRecipeDetails, favoriteList, handleAddToFavorite } =
    useContext(FoodContext);

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipeDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data?.recipe) {
          setRecipeDetails(data?.data.recipe);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getRecipeDetails();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="h-full">
      {recipeDetails ? (
        <div className="flex gap-10 ">
          <div className="max-h-[700px] w-1/2 m-4 rounded-3xl shadow-2xl overflow-hidden shadow-gray-500 hover:shadow-black">
            <img
              src={recipeDetails.image_url}
              alt={recipeDetails.title}
              className="w-full aspect-[9:21] object-cover rounded-3xl hover:scale-105 duration-300"
            />
          </div>
          <div className="flex flex-col w-1/2 p-5 rounded-xl font-semibold text-3xl gap-3">
            <span className="text-teal-500">{recipeDetails.publisher}</span>
            <span className="font-bold text-4xl">{recipeDetails.title}</span>
            <button
              className="p-3 bg-black text-white uppercase text-2xl rounded-xl w-fit px-10 shadow-xl shadow-gray-500 hover:shadow-black mb-3"
              onClick={() => handleAddToFavorite(recipeDetails)}
            >
              {favoriteList &&
              favoriteList.length > 0 &&
              favoriteList.findIndex(
                (item) => item.id === recipeDetails?.id
              ) !== -1
                ? "Remove from favorite"
                : "Add to favorite"}
            </button>
            <ul className="flex gap-2 flex-col list-disc">
              {recipeDetails.ingredients.map((item, index) => (
                <li key={index}>
                  <span>{item.quantitiy}</span>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Details;
