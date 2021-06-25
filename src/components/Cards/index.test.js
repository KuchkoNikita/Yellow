import React from 'react';
import moment from 'moment';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducer from '../../store/reducers/rootReducer';
import Cards from './index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const CARDS = [
  {
    date: 1624395600000, // 23.06.2021
    distance: 15,
    id: 1,
    time: 14,
    user_id: '3',
  },
  {
    date: 1626901200000, // 22.07.2021
    distance: 11,
    id: 2,
    time: 100,
    user_id: '3',
  },
  {
    date: 1629493200000, // 21.08.2021
    distance: 21,
    id: 3,
    time: 200,
    user_id: '3',
  },
];

describe('Cards', () => {
  it('renders Cards component', () => {
    const { getAllByTestId } = renderWithRedux(<Cards cards={CARDS} isOpenFilter={false} />);

    expect(getAllByTestId('card')).toHaveLength(3);
  });

  it('renders filter Cards component', () => {
    const filterStart = moment('20.05.2021', 'DD.MM.YYYY');
    const filterEnd = moment('23.07.2021', 'DD.MM.YYYY');

    const { getAllByTestId } = renderWithRedux(<Cards cards={CARDS} />, {
      initialState: { filter: { filterStart, filterEnd, isOpenFilter: true } },
    });

    expect(getAllByTestId('card')).toHaveLength(2);
  });

  describe('Events', () => {
    it('check click on add button', () => {
      const mockSetIsOpenForm = jest.fn();

      renderWithRedux(<Cards cards={CARDS} setIsOpenForm={mockSetIsOpenForm} />);

      userEvent.click(screen.getByRole('button'));

      expect(mockSetIsOpenForm).toHaveBeenCalledTimes(1);
      expect(mockSetIsOpenForm).toHaveBeenCalledWith(true);
    });
  });
});
