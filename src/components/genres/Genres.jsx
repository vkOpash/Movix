import React from "react";
// import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  // const { genres } = useSelector((state) => state.home);
const genres = []
//   console.log(genres, "genres..");

  return (
    <div className="genres">
      {data?.map((g) => {
        // console.log(g, "gggg");
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
