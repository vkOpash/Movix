import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
// import useFetch from "../../../hooks/useFetch";
// import { useSelector } from "react-redux";

import Img from "../../../components/lazyLoadImg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("https://image.tmdb.org/t/p/original/vT17lPUglrAzjEqMwjPpIDe49ty.jpg");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const url = ""
  const data = ""
  // const { url } = useSelector((state) => state.home);
  // const { data, loading } = useFetch("/movie/upcoming");

  //   console.log(data?.results?.adult, "data");



  // ------------------for backdrop---------------
  // useEffect(() => {
  //   const bg =
  //     url?.backdrop +
  //     data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
  //   setBackground(bg);
  // }, [data]);

  const searchQueryHandler = (event) => {
    // setQuery(event.target.value)
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  // console.log("searchQuery", searchQueryHandler(''))

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background}></Img>
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Milions of movies, TV shows and people to discover. Explore Now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show.."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button type="button">Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
