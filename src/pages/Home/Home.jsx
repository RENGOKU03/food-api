import React, { useContext } from "react";
import { FoodContext } from "../../context/Context";
import Loading from "../../components/Loading";
import Card from "../../components/Card";

const Home = () => {
  const { loading, recipelist, searchParam } = useContext(FoodContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
        {recipelist
          ? recipelist.map((item) => <Card key={item.id} item={item} />)
          : null}
      </div>
      {searchParam ? (
        <div className="text-center text-6xl font-bold p-10 ">
          No results found
        </div>
      ) : null}
      {!searchParam ? (
        <div>
          <p className="text-center text-6xl font-bold p-10 [text-shadow: 5px 5px #558ABB]">
            Search For Recipes
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
