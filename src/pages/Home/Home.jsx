import React, { useContext } from "react";
import { FoodContext } from "../../context/Context";
import Loading from "../../components/Loading";
import Card from "../../components/Card";

const Home = () => {
  const { loading } = useContext(FoodContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Card />
    </div>
  );
};

export default Home;
