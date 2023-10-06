import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter.js';
import SearchForm from './components/searchform.js';
import GenreSelect from './components/genreselect.js';
import './index.css';

class App extends React.Component {
  handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  handleGenreSelect = (genre) => {
    alert(`Selected genre: ${genre}`);
  };

  render() {
    return React.createElement('div', null, 
      React.createElement(Counter, { initialValue: 0 }),
      React.createElement(SearchForm, {
        initialSearchQuery: 'What do you want to watch?',
        onSearch: this.handleSearch,
      }),
      React.createElement(GenreSelect, {
        genres: ['All', 'Documentry', 'Comedy', 'Horror', 'Crime'],
        selectedGenre: 'Action',
        onSelect: this.handleGenreSelect
      })
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);