import { createContext, useState } from "react";

export const FoodContext = createContext(null);

export default function GlobalFoodState({ children }) {
  const [searchParam, setSearchParam] = useState("mango");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipelist, setRecipeList] = useState([]);

  async function handleSubmitButton(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data.recipes);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
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
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
