import React from 'react';
import '../css/searchform.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: this.props.initialSearchQuery || '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchQuery);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div className="form-container">
        <p className="header-element">FIND YOUR MOVIE</p>
        <input
          className="form-input"
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button className="form-button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
