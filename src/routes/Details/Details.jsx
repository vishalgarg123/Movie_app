import React from "react";

import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { DetailsBanner } from "./DetailsBanner/DetailsBanner";
import Cast from "./Cast/Cast";
import VideosSection from "./VideoSection/VideoSection";
import SimilarVideos from "./Carousels/SimilarVideos";
import Recommendation from "./Carousels/Recommadations";
const Details = () => {
  const{mediaType,id}=useParams()

  const{data,loading}=useFetch( `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=e27c5ca0e405a55deb0508c7b709cc2b`
  );
  const{data:credits,loading: creditsloading}=useFetch( `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=e27c5ca0e405a55deb0508c7b709cc2b`
  );


  return( 
    <div>
  <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
  <Cast data={credits?.cast} loading={creditsloading}/>
  <VideosSection data={data} loading={loading} />
  <SimilarVideos mediaType={mediaType} id={id} />
  <Recommendation mediaType={mediaType} id={id}/>
  </div>
  )
  
};

export default Details;
