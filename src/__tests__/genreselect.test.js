import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreSelect from '../components/genreselect';

test('renders all genres passed in props', () => {
    const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
    const { getAllByRole } = render(<GenreSelect genres={genres} />);
    const genreButtons = getAllByRole('button');
    expect(genreButtons).toHaveLength(genres.length);
    genres.forEach((genre, index) => {
        expect(genreButtons[index]).toHaveTextContent(genre);
    });
});

test('highlights the selected genre passed in props', () => {
    const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
    const selectedGenre = 'Comedy';
    const { getByText } = render(<GenreSelect genres={genres} selectedGenre={selectedGenre} />);
    const comedyButton = getByText('Comedy');
    expect(comedyButton).toHaveClass('red');
});

test('calls "onChange" callback with correct genre on button click', () => {
    const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
    const selectedGenre = 'Adventure';
    const onSelect = jest.fn(); 
    const { getByText } = render(
        <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
    );
    const comedyButton = getByText('Comedy');
    fireEvent.click(comedyButton);
    expect(onSelect).toHaveBeenCalledWith('Comedy');
});
