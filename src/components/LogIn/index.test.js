import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducer from '../../store/reducers/rootReducer';
import LogIn from './index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const renderWithReduxThunk = (
  component,
  { store = createStore(reducer, applyMiddleware(thunk)) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('LogIn', () => {
  it('renders LogIn component', () => {
    renderWithRedux(<LogIn />);
    expect(screen.getByText(/Let me in/i)).toBeInTheDocument();
  });

  /*describe('Events', () => {
    it('Click in the button', () => {
      const mockAuth = jest.fn();

      renderWithReduxThunk(<LogIn auth={mockAuth} />);

      const authButton = screen.getByText(/Let me in/i);

      userEvent.click(authButton);
      expect(mockAuth).toHaveBeenCalledTimes(1);
      expect(mockAuth).toHaveBeenCalledWith();
    });
  });*/
});
