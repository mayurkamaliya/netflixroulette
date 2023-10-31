import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/counter';

test('Counter component renders initial value provided in props', () => {
    const counterComponent = new Counter({ initialValue: 5 });
    expect(counterComponent.getValue()).toBe(5);
});

test('Counter renders the initial value provided in props', () => {
    const { getByText } = render(<Counter initialValue={5} />);
    const counterValue = getByText('Counter Value: 5');
    expect(counterValue).toBeInTheDocument();
});

test('Clicking the "decrement" button decrements the displayed value', () => {
    const { getByText } = render(<Counter initialValue={3} />);
    const decrementButton = getByText('Decrement');
    const counterValue = getByText('Counter Value: 3');

    fireEvent.click(decrementButton);

    expect(counterValue).toHaveTextContent('Counter Value: 2');
});

test('Clicking the "increment" button increments the displayed value', () => {
    const { getByText } = render(<Counter initialValue={2} />);
    const incrementButton = getByText('Increment');
    const counterValue = getByText('Counter Value: 2');

    fireEvent.click(incrementButton);

    expect(counterValue).toHaveTextContent('Counter Value: 3');
});
