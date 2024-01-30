import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../Hooks/useFetch";

const SimilarVideos = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=e27c5ca0e405a55deb0508c7b709cc2b`
  );

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default SimilarVideos;
