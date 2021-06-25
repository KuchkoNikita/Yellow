import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import reducer from '../../store/reducers/rootReducer';
import Layout from './index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Layout', () => {
  it('starting renders Layout component', () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Layout />);

    expect(getByTestId(/header/i)).toBeInTheDocument();
    expect(getByTestId(/layout/i)).toBeInTheDocument();

    expect(queryByTestId(/drawer/i)).not.toBeInTheDocument();
    expect(queryByTestId(/filter/i)).not.toBeInTheDocument();
  });

  it('renders Layout component if filter open', () => {
    const { getByTestId, queryByTestId } = renderWithRedux(<Layout />, {
      initialState: { filter: { isOpenFilter: true } },
    });

    expect(getByTestId(/header/i)).toBeInTheDocument();
    expect(getByTestId(/layout/i)).toBeInTheDocument();
    expect(getByTestId(/filter/i)).toBeInTheDocument();
    expect(queryByTestId(/drawer/i)).not.toBeInTheDocument();
  });

  //   it('renders Layout component if filter and drawer open', () => {
  //     const { getByTestId } = renderWithRedux(<Layout />, {
  //       initialState: { filter: { isOpenFilter: true } },
  //     });

  //     screen.debug();

  //     expect(getByTestId(/header/i)).toBeInTheDocument();
  //     expect(getByTestId(/layout/i)).toBeInTheDocument();
  //     expect(getByTestId(/filter/i)).toBeInTheDocument();
  //     expect(getByTestId(/drawer/i)).toBeInTheDocument();
  //   });

  //   it('renders Layout component if drawer open', () => {
  //     const { getByTestId, queryByTestId } = renderWithRedux(<Layout />, {
  //       initialState: { filter: { isOpenFilter: true } },
  //     });

  //     expect(getByTestId(/header/i)).toBeInTheDocument();
  //     expect(getByTestId(/layout/i)).toBeInTheDocument();
  //     expect(getByTestId(/filter/i)).toBeInTheDocument();
  //     expect(queryByTestId(/drawer/i)).toBeInTheDocument();
  //   });
});
