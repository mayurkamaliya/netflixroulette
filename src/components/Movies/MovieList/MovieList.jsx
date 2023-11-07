import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";

const MoviesList = () => {
  const [moviesResponse, setMoviesResponse] = useState([]);
  const [limit] = useState(10);
  const [sortBy] = useState("releaseDate");
  const [offset, setOffset] = useState(0);

  const fetchMoviesData = async () => {
    try {
      const url = new URL("http://localhost:4000/movies");
      url.searchParams.append("sortBy", sortBy);
      url.searchParams.append("limit", limit);
      url.searchParams.append("offset", offset);
      const response = await fetch(url.toString());
      const moviesResponse = await response.json();
      const data = moviesResponse.data;
      setMoviesResponse((prevMovies) => [...prevMovies, ...data]);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    }
  };

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  useEffect(() => {
    fetchMoviesData();
  }, [offset]);

  return (
    <div>
      <section className="movielist">
        {moviesResponse !== null &&
          moviesResponse.map((input) => (
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
      <div className="load-more-container">
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
