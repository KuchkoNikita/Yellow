import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducer from '../../store/reducers/rootReducer';
import Header from './index';

const renderWithRouterAndRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};

describe('Header', () => {
  it('renders Header component if is customer authenticated', () => {
    renderWithRouterAndRedux(<Header isAuthenticated={true} />);

    const [filterButton, menuButton] = screen.queryAllByRole('button');

    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/JOGS/i)).toBeInTheDocument();
    expect(screen.getByText(/INFO/i)).toBeInTheDocument();
    expect(screen.getByText(/CONTACT US/i)).toBeInTheDocument();

    expect(filterButton).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();
  });

  it('renders Drawer component if is NOT customer authenticated', () => {
    renderWithRouterAndRedux(<Header isAuthenticated={false} />);

    // const [filterButton, menuButton] = screen.queryAllByRole('button');

    expect(screen.getByText(/logo/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/JOGS/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/INFO/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/CONTACT US/i)).not.toBeInTheDocument();

    // expect(filterButton).not.toBeInTheDocument();
    // expect(menuButton).not.toBeInTheDocument();
  });

  describe('Events', () => {
    // it('check click on the Filter button', () => {
    //   const mockActionToggleForm = jest.fn();

    //   renderWithRouterAndRedux(
    //     <Header actionToggleForm={mockActionToggleForm} isAuthenticated={true} />,
    //     {
    //       initialState: { filter: { isOpenFilter: true } },
    //     }
    //   );

    //   const [filterButton] = screen.getAllByRole('button');

    //   userEvent.click(filterButton);

    //   expect(mockActionToggleForm).toHaveBeenCalledTimes(1);
    // });

    it('check click on the Drawer button', () => {
      const mockSetIsOpenDrawer = jest.fn();

      renderWithRouterAndRedux(
        <Header setIsOpenDrawer={mockSetIsOpenDrawer} isAuthenticated={true} />
      );

      const [, drawerButton] = screen.getAllByRole('button');

      userEvent.click(drawerButton);

      expect(mockSetIsOpenDrawer).toHaveBeenCalledTimes(1);
      expect(mockSetIsOpenDrawer).toHaveBeenCalledWith(true);
    });
  });
});
