import React, { useContext, useEffect } from "react";
import { FoodContext } from "../../context/Context";
import Card from "../../components/Card";

const Favorites = () => {
  const { setFavoriteList, favoriteList } = useContext(FoodContext);
  useEffect(() => {
    const storedList = localStorage.getItem("favoriteList");
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      if (parsedList) {
        setFavoriteList(parsedList);
      }
    }
  }, []);
  useEffect(() => {
    if (favoriteList.length > 0) {
      localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
    }
  }, [favoriteList]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5 m-4">
      {favoriteList && favoriteList.length
        ? favoriteList.map((item, index) => <Card key={index} item={item} />)
        : null}
    </div>
  );
};

export default Favorites;
