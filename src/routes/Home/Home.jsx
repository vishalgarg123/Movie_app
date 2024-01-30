import React from "react";
import "./style.scss"
import { useSelector } from "react-redux";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Trending from "./Trending/Trending";
import { Popular } from "./Popular/Popular";
import { Top_rated } from "./Top_rated/Top_rated";
const Home = () => {
  const { url } = useSelector((state) => state.home);

  return (
    <>
      <div>
        <HeroBanner />
        <Trending/>
        <Popular/>
        <Top_rated/>
      </div>
    </>
  );
};

export default Home;
