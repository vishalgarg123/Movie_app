import React, { useState } from "react";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";

import { SwitchTabs } from "../../../Components/switchTabs/SwitchTabs";
import useFetch from "../../../Hooks/useFetch";
import Carousel from "../../../Components/Carousel/Carousel";
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(
    `https://api.themoviedb.org/3/trending/all/${endpoint}?api_key=e27c5ca0e405a55deb0508c7b709cc2b`
  );

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Trending</span>
          <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
      </div>
    </>
  );
};

export default Trending;
