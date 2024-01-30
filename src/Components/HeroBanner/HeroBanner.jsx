import React, { useState, useEffect } from "react";
import  "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Img from "../LazyLoadImage/Img";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useSelector } from "react-redux";
const HeroBanner = () => {
  const [background, setBackground] = useState(" ");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e27c5ca0e405a55deb0508c7b709cc2b"
  );

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const SearchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <div className="heroBanner">
        <div className="backdropimg">
          <Img src={background} />
        </div>
        <div className="opacitylayer"></div>
        <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subtitle">
              Millions of movies,Tv shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show......"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={SearchQueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
