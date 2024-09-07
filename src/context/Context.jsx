import { createContext, useState } from "react";

export const FoodContext = createContext(null);

function GlobalFoodState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipelist, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  async function handleSubmitButton(e) {
    e.preventDefault();
    if (!searchParam) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    if (!getCurrentItem || !getCurrentItem.id) {
      return;
    }
    let copyList = [...favoriteList];
    const index = copyList.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1) {
      copyList.push(getCurrentItem);
    } else {
      copyList.splice(index, 1);
    }
    setFavoriteList(copyList);
  }
  return (
    <FoodContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmitButton,
        loading,
        error,
        recipelist,
        favoriteList,
        setFavoriteList,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorite,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export default GlobalFoodState;
