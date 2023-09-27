import React, { useEffect } from "react";
import "./style.scss";
// import useFetch from "../../hooks/useFetch";
// import { useParams } from "react-router-dom";
// import DetailsBanner from "./detailsBanner/DetailsBanner";
// import Cast from "../cast/Cast";
// import VideosSection from "../videosSection/VideosSection";
// import Similar from "./carousels/Similar";
// import Recommendation from "./carousels/Recommendation";
import DetailsBanner from "./detailsBanner/DetailsBanner"
import { useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
  // const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  // const { data: credits, loading: creditsLoading } = useFetch(
  //   `/${mediaType}/${id}/credits`
  // );
  const data = []
  const credits = ""
//   const { id } = useParams();
//   console.log(id,"<---id");
//   useEffect(()=>{
//     axios.get(`http://localhost:8080/getMovieById/${id}`).then(data=>{
//         setMovie(data.data.data)
//         console.log(data,"<------:::");
//     }).catch(err=>{
//         console.log(err);
//     })
// },[])
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      {/* <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id} /> */}
    </div>
  );
};

export default Details;
