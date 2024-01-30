import React, { useState } from "react";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";

import { SwitchTabs } from "../../../Components/switchTabs/SwitchTabs";
import useFetch from "../../../Hooks/useFetch";
import Carousel from "../../../Components/Carousel/Carousel";
export const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(
    `https://api.themoviedb.org/3/${endpoint}/popular?api_key=e27c5ca0e405a55deb0508c7b709cc2b`
  );

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">What's Popular</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
      </div>
    </>
  );
};
