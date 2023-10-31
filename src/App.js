import React from 'react';
import Counter from "./components/Counter/counter";
import SearchForm from "./components/SearchForm/searchform";
import "./index.css";
import "./components/Header/header.css";
import MoviesList from "./components/Movies/MovieList";
import SortAndGenreControl from "./components/SortAndGenreControl/SortAndGenreControl";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: null,
      currentSort: "releaseDate",
    };
  }

  handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
    alert(`Selected genre: ${genre}`);
  };

  handleSortChange = (sortOption) => {
    this.setState({ currentSort: sortOption });
  };

  render() {
    const selectedGenre = this.state.selectedGenre;
    const currentSort = this.state.currentSort;

    return (
      <div className="div-container">
        <Counter initialValue={0} />
        <SearchForm
          initialSearchQuery="What do you want to watch?"
          onSearch={this.handleSearch}
        />
        <SortAndGenreControl
          genres={["All", "Documentry", "Comedy", "Horror", "Crime"]}
          selectedGenre={selectedGenre}
          onSelect={this.handleGenreSelect}
          currentSort={currentSort}
          onSortChange={this.handleSortChange}
        />
        <br />
        <MoviesList />
        <br />
      </div>
    );
  }
}

export default App;