import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";
import { GET_MOVIES_ENDPOINT } from "../../constants";

const MoviesList = (props) => {
  const [moviesResponse, setMoviesResponse] = useState([]);
  const [limit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);

  const fetchMoviesData = async (searchString, selectedGenre) => {
    try {
      const url = new URL(GET_MOVIES_ENDPOINT);
      url.searchParams.append("sortBy", props.currentSort);
      url.searchParams.append("limit", limit);
      url.searchParams.append("offset", offset);
      url.searchParams.append("sortOrder", "desc");
      if (searchString) {
        url.searchParams.append("search", searchString);
        url.searchParams.append("searchBy", "title");
      }
      if (selectedGenre && selectedGenre != "All") {
        url.searchParams.append("search", selectedGenre);
        url.searchParams.append("searchBy", "genres");
      }
      const response = await fetch(url.toString());
      const moviesResponse = await response.json();
      const data = moviesResponse.data;
      setTotalMovies(moviesResponse.totalAmount);
      setMoviesResponse([...data]);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    }
  };

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalMovies / limit);

  useEffect(() => {
    fetchMoviesData(props.searchString, props.selectedGenre);
  }, [offset, props.searchString, props.selectedGenre, props.currentSort]);

  const handlePreviousPage = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

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
      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          className="pagination-button"
          disabled={offset === 0}
        >
          Previous
        </button>
        <div className="page-numbers">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={handleNextPage}
          className="pagination-button"
          disabled={offset + limit >= totalMovies}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
