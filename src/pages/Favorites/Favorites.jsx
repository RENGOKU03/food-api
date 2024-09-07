import React, { useContext, useEffect } from "react";
import { FoodContext } from "../../context/Context";
import Card from "../../components/Card";

const Favorites = () => {
  const { setFavoriteList, favoriteList } = useContext(FoodContext);
  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);
  useEffect(() => {
    const storedList = localStorage.getItem("favoriteList");
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      if (parsedList) {
        setFavoriteList(parsedList);
      }
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 m-5">
      {favoriteList && favoriteList.length
        ? favoriteList.map((item, index) => <Card key={index} item={item} />)
        : null}
    </div>
  );
};

export default Favorites;
