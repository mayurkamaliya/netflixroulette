import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";
import { GET_MOVIES_ENDPOINT } from "../../constants";

const MoviesList = () => {
  const [moviesResponse, setMoviesResponse] = useState(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sortBy] = useState("releaseDate");

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        GET_MOVIES_ENDPOINT +
          "?sortBy=${sortBy}&offset=${offset}&limit=${limit}"
      );
      const data = await response.json();
      setMoviesResponse(data);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [offset]);

  return (
    <section className="movielist">
      {moviesResponse !== null &&
        moviesResponse.data.map((input) => (
          <article key={input.id} className="moviecard">
            <MovieCard
              id={input.id}
              pictureURL={input.poster_path}
              tagline={input.tagline}
              name={input.title}
              year={input.release_date}
              genres={input.genres}
              overview={input.overview}
              runtime={input.runtime}
              film={input}
            />
          </article>
        ))}
    </section>
  );
};

export default MoviesList;
