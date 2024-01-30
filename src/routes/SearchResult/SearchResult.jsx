import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styles.scss";

import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

import MovieCard from "../../Components/movieCard/MovieCard";
import Spinner from "../../Components/Spinner/Spinner";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const fetchInitialData = () => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query} & page=${pageNum}&api_key=e27c5ca0e405a55deb0508c7b709cc2b`
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      });
  };
  const fetchNextPageData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query} & page=${pageNum}&api_key=e27c5ca0e405a55deb0508c7b709cc2b`
    )
      .then((res) => res.json())
      .then((d) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...d.results],
          });
        } else {
          setData(d);
        }
        setPageNum((prev) => prev + 1);
      });
  };
  useEffect(() => {
    setPageNum(1)
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
