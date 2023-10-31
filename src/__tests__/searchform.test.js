import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from '../components/searchform';

const mockOnSearch = jest.fn(); 

test('renders an input with the value equal to initial value passed in props', () => {
  const { getByRole } = render(<SearchForm initialSearchQuery="Initial Value" />);
  const input = getByRole('textbox');
  expect(input).toHaveValue('Initial Value');
});

test('calls the "onSearch" prop with proper value after clicking Submit button', () => {
  const { getByRole, getByText } = render(<SearchForm onSearch={mockOnSearch} />);
  const input = getByRole('textbox');
  const submitButton = getByText('Search');

  fireEvent.change(input, { target: { value: 'Search Query' } });
  fireEvent.click(submitButton);

  expect(mockOnSearch).toHaveBeenCalledWith('Search Query');
});

test('calls the "onSearch" prop with proper value after pressing Enter key', () => {
  const { getByRole } = render(<SearchForm onSearch={mockOnSearch} />);
  const input = getByRole('textbox');

  fireEvent.change(input, { target: { value: 'Search Query' } });
  fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

  expect(mockOnSearch).toHaveBeenCalledWith('Search Query');
});
