import React from 'react';
import '../css/genreselect.css';

class GenreSelect extends React.Component {
  render() {
    const { genres, selectedGenre, onSelect } = this.props;

    const genreButtons = genres.map((genre) => {
      const buttonClass = `genre-button`;
      return React.createElement(
        'button',
        {
          key: genre,
          className: buttonClass,
          onClick: () => onSelect(genre),
        },
        genre
      );
    });

    return React.createElement('div', { className: 'genre-container' }, genreButtons);
  }
}

export default GenreSelect;
