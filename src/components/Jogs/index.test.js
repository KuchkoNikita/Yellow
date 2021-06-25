import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducer from '../../store/reducers/rootReducer';
import Jogs from './index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, compose(applyMiddleware(thunk)), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Jogs', () => {
  it('renders Jogs component', () => {
    const mockFetchJogs = jest.fn();
    renderWithRedux(<Jogs fetchJogs={mockFetchJogs} />);
    expect(mockFetchJogs).toHaveBeenCalledTimes(1);
  });
});
