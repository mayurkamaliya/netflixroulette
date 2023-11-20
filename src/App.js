import React from 'react';
import Counter from "./components/Counter/counter";
import SearchForm from "./components/SearchForm/searchform";
import "./index.css";
import "./components/Header/header.css";
import MoviesList from "./components/Movies/MovieList/MovieList";
import SortAndGenreControl from "./components/SortAndGenreControl/SortAndGenreControl";
import AddMovie from "./components/Movies/AddMovie/AddMovie";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'All',
      currentSort: "release_date",
      searchString: "",
    };
  }

  handleSearch = (query) => {
    this.setState({ searchString: query });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });

  };

  handleSortChange = (sortOption) => {
    this.setState({ currentSort: sortOption });
  };

  render() {
    const { selectedGenre, currentSort, searchString } =
      this.state;
    return (
      <div className="div-container">
        <Router>
          <Counter initialValue={0} />
          <AddMovie />
          <SearchForm onSearch={this.handleSearch} />
          <SortAndGenreControl
            genres={["All", "Action", "Comedy", "Horror", "Crime"]}
            selectedGenre={selectedGenre}
            onSelect={this.handleGenreSelect}
            currentSort={currentSort}
            onSortChange={this.handleSortChange}
          />
          <Routes>
            <Route path='/' element={<MoviesList
              selectedGenre={selectedGenre}
              currentSort={currentSort}
              searchString={searchString} />} />

            <Route path='/:movieIdParam' element={<MoviesList
              selectedGenre={selectedGenre}
              currentSort={currentSort}
              searchString={searchString} />} />

          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;