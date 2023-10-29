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
      selectedgenre: null,
      currentSort: "releaseDate",
    };
  }

  handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedgenre: genre });
    alert(`Selected genre: ${genre}`);
  };

  handleSortChange = (sortOption) => {
    this.setState({ currentSort: sortOption });
  };

  render() {
    const selectedgenre = this.state.selectedgenre;
    const currentSort = this.state.currentSort;

    return React.createElement(
      "div",
      { className: "div-container" },
      React.createElement(Counter, { initialValue: 0 }),
      React.createElement(SearchForm, {
        initialSearchQuery: "What do you want to watch?",
        onSearch: this.handleSearch,
      }),
      React.createElement(SortAndGenreControl, {
        genres: ["All", "Documentry", "Comedy", "Horror", "Crime"],
        selectedGenre: selectedgenre,
        onSelect: this.handleGenreSelect,
        currentSort: currentSort,
        onSortChange: this.handleSortChange,
      }),
      <br />,
      <MoviesList />,
      <br />
    );
  }
}

export default App;