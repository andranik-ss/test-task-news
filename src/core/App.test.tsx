import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  const { container } = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );

  expect(container).toBeInTheDocument();
  expect(screen.getByText(/news/i)).toBeInTheDocument();
});
