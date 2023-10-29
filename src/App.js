import React from 'react';
import Counter from "./components/Counter/counter";
import SearchForm from "./components/SearchForm/searchform";
import GenreSelect from "./components/GenreSelect/genreselect";
import "./index.css";
import "./components/Header/header.css";
import MoviesList from "./components/Movies/MovieList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedgenre: null,
    };
  }

  handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedgenre: genre });
    alert(`Selected genre: ${genre}`);
  };

  render() {
    const selectedgenre = this.state.selectedgenre;
    return React.createElement(
      "div",
      { className: "div-container" },
      React.createElement(Counter, { initialValue: 0 }),
      React.createElement(SearchForm, {
        initialSearchQuery: "What do you want to watch?",
        onSearch: this.handleSearch,
      }),
      React.createElement(GenreSelect, {
        genres: ["All", "Documentry", "Comedy", "Horror", "Crime"],
        selectedGenre: selectedgenre,
        onSelect: this.handleGenreSelect,
      }),
      <br />,
      <MoviesList />,
      <br />
    );
  }
}

export default App;