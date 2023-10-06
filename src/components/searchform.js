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
    const inputElement = React.createElement('input', {
      className: 'form-input',
      type: 'text',
      value: this.state.searchQuery,
      onChange: this.handleInputChange,
      onKeyPress: this.handleKeyPress,
    });

    const buttonElement = React.createElement('button', {
      className: 'form-button',
      onClick: this.handleSearch,
    }, 'Search');

    const formContainer = React.createElement('div', { className: 'form-container' },
      inputElement,
      buttonElement
    );

    return formContainer;
  }
}

export default SearchForm;
