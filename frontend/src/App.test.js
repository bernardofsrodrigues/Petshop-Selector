import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders form correctly', () => {
  render(<App />);
  expect(screen.getByText('Petshop Selector')).toBeInTheDocument();
  expect(screen.getByLabelText('Data:')).toBeInTheDocument();
  expect(screen.getByLabelText('Cães Pequenos:')).toBeInTheDocument();
  expect(screen.getByLabelText('Cães Grandes:')).toBeInTheDocument();
});

test('submits form and displays result', async () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText('Data:'), { target: { value: '2024-06-12' } });
  fireEvent.change(screen.getByLabelText('Cães Pequenos:'), { target: { value: '3' } });
  fireEvent.change(screen.getByLabelText('Cães Grandes:'), { target: { value: '2' } });

  fireEvent.click(screen.getByText('Encontrar Melhor Petshop'));

  const result = await screen.findByText(/Melhor Petshop:/);
  expect(result).toBeInTheDocument();
});
