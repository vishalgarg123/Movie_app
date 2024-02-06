import React from "react";

import Carousel from "../../../Components/Carousel/Carousel";
import useFetch from "../../../Hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=e27c5ca0e405a55deb0508c7b709cc2b`
  );

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Recommendation;
