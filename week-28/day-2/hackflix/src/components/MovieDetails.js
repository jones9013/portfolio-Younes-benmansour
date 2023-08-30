import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieDeets, setMovieDeets] = useState({});

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
      },
    }).then((res) => {
      const movieDetails = res.data;
      setMovieDeets(movieDetails);
    });
  }, [movieID]);

  return (
    <>
      <h2>the deets!</h2>
    </>
  );
};

export default MovieDetails;
