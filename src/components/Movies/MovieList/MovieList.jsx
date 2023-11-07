import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";
import { GET_MOVIES_ENDPOINT } from "../../constants";

const MoviesList = (props) => {
  const [moviesResponse, setMoviesResponse] = useState([]);
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);

  const fetchMoviesData = async (searchString) => {
    try {
      const url = new URL(GET_MOVIES_ENDPOINT);
      url.searchParams.append("sortBy", props.currentSort);
      url.searchParams.append("limit", limit);
      url.searchParams.append("offset", offset);
      url.searchParams.append("sortOrder", "desc");
      if (searchString) {
        console.log("search string " + searchString);
        url.searchParams.append("search", searchString);
        url.searchParams.append("searchBy", "title");
      }
      const response = await fetch(url.toString());
      const moviesResponse = await response.json();
      const data = moviesResponse.data;
      if (searchString) {
        setMoviesResponse([...data]);
      } else {
        setMoviesResponse((prevMovies) => [...prevMovies, ...data]);
      }
    } catch (error) {
      console.error("Error while fetching data: ", error);
    }
  };

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const sortMovies = (props) => {
    if (props.currentSort === "release_date") {
      let data = moviesResponse.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      setMoviesResponse([...data]);
    } else if (props.currentSort === "title") {
      let data = moviesResponse.sort((a, b) => b.title.localeCompare(a.title));
      setMoviesResponse([...data]);
    }
  };

  useEffect(() => {
    sortMovies(props);
  }, [props.currentSort]);

  useEffect(() => {
    fetchMoviesData(props.searchString);
  }, [offset, props.searchString]);

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
