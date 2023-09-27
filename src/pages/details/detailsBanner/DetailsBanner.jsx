import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import useFetch from "../../../hooks/useFetch";
// import Genres from "../../../components/genres/Genres";
// import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImg/Img";
import PosterFallback from "../../../assets/no-poster.png";
// import { PlayIcon } from "../Playbtn";
import { PlayIcon } from "../Playbtn";
// import VideoPopup from "../../../components/videoPopup/Videopopup";
import axios from "axios";
import CircleRating from "../../../components/circleRating/CircleRating";
// import Genres from "../../../components/genres/Genres"
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

const DetailsBanner = ({ video, crew }) => {
  const [data, setMovie] = useState();
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const navigate = useNavigate();

  console.log(data, "<---movie data 00000000000");

  // const { mediaType, id } = useParams();
  // console.log(id,"<---id");
  // const { data, loading } = useFetch(`/${mediaType}/${id}`);

  // const { url } = useSelector((state) => state.home);
  // const data = ""
  const url = "";
  const loading = false;

  const { id } = useParams();
  console.log(id, "<---id");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getMovieById/${id}`)
      .then((data) => {
        setMovie(data.data.data);
        console.log(data, "<------:::");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const _genres = data?.genres?.map((g) => g.id);

  //   useEffect(()=>{
  //     console.log("useEffect");
  //     axios.get(`http://localhost:8080/getMovieById/${id}`).then(data=>{
  //         setMovies(data.data.data)
  //         console.log(data.data.data,"<------:::");
  //     }).catch(err=>{
  //         console.log(err);
  //     })
  // },[])

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? `${minutes}m` : ""}`;
  };

  // console.log(toHoursAndMinutes(142), "tohours")

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <>
              <div>
                <div className="backdrop-img">
                  {/* <Img src={url.backdrop + data?.backdrop_path} /> */}
                  <Img src={data.bg_poster} />
                </div>
                <div className="opacity-layer"></div>
                <ContentWrapper>
                  <div className="content">
                    <div className="left">
                      {data?.poster_path ? (
                        <Img
                          className="posterImg"
                          // src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                          src={data.poster_path}
                        />
                      ) : (
                        <Img className="posterImg" src={PosterFallback} />
                      )}
                    </div>
                    <div className="right">
                      <div className="title">
                        {`${data?.name || data?.title}(${dayjs(
                          data.release_date
                        ).format("YYYY")})`}
                      </div>
                      <div className="subtitle">{data.tagline}</div>

                      <div className="genres">
                        {data?.genre.map((g, i) => {
                          // console.log(g, "gggg");
                          if (!g) return;
                          return (
                            <div key={i} className="genre">
                              {g}
                            </div>
                          );
                        })}
                      </div>

                      <div className="row">
                        <CircleRating rating={data?.rating} />

                        <Link
                          to={data.trailerURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playbtn"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <PlayIcon />
                          <span className="text">Watch Trailer</span>
                        </Link>
                      </div>

                      <div className="overview">
                        <div className="heading">Overview</div>
                        <div className="description">{data?.overview}</div>
                      </div>

                      <div className="info">
                        {data?.status && (
                          <div className="infoItem">
                            <span className="text bold">Status :</span>
                            <span className="text">{data?.status}</span>
                          </div>
                        )}
                        {data?.release_date && (
                          <div className="infoItem">
                            <span className="text bold">Release Date :</span>
                            <span className="text">
                              {dayjs(data?.release_date).format("MMM DD, YYYY")}
                            </span>
                          </div>
                        )}
                        {data?.runtime && (
                          <div className="infoItem">
                            <span className="text bold">Run time:</span>
                            <span className="text">
                              {toHoursAndMinutes(data?.runtime)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* {director.length > 0 && (
                        <div className="info">
                          <span className="text bold">Director :</span>
                          <span className="text">
                            {director?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {director.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )} */}

                      {writer?.length > 0 && (
                        <div className="info">
                          <span className="text bold">Writer :</span>
                          <span className="text">
                            {writer?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {writer?.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}

                      {data?.created_by?.length > 0 && (
                        <div className="info">
                          <span className="text bold">Created by :</span>
                          <span className="text">
                            {data?.created_by?.map((d, i) => (
                              <span key={i}>
                                {d.name}
                                {data?.created_by?.length - 1 !== i && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                      
                      <div className="socialIcons">
                      <Link
                          to={data.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <span className="icon">
                            Download
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <VideoPopup
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                  /> */}
                </ContentWrapper>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
