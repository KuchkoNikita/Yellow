import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducer from '../../store/reducers/rootReducer';
import FilterForm from './index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('FilterForm', () => {
  it('renders Cards component if it is open', () => {
    renderWithRedux(<FilterForm />, { initialState: { filter: { isOpenFilter: true } } });

    expect(screen.getByText(/Date from/i)).toBeInTheDocument();
    expect(screen.getByText(/Date to/i)).toBeInTheDocument();

    expect(screen.getAllByRole('textbox')).toHaveLength(2);
  });

  it('renders Cards component if it is NOT open', () => {
    renderWithRedux(<FilterForm />, { initialState: { filter: { isOpenFilter: false } } });

    expect(screen.queryByText(/Date from/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Date to/i)).not.toBeInTheDocument();

    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });

  describe('Events', () => {
    it('check change events on inputs', () => {
      const START_VALUE = '23.06.2021';
      const END_VALUE = '23.06.2021';

      renderWithRedux(<FilterForm />, { initialState: { filter: { isOpenFilter: true } } });

      const [filterStart, filterEnd] = screen.getAllByRole('textbox');

      userEvent.type(filterStart, START_VALUE);
      expect(filterStart).toHaveValue(START_VALUE);

      userEvent.type(filterEnd, END_VALUE);
      expect(filterEnd).toHaveValue(END_VALUE);
    });

    it('check change events on inputs', () => {
      const START_VALUE = '23.06.2021';
      const END_VALUE = '23.06.2021';

      renderWithRedux(<FilterForm />, { initialState: { filter: { isOpenFilter: true } } });

      const [filterStart, filterEnd] = screen.getAllByRole('textbox');

      userEvent.type(filterStart, START_VALUE);
      expect(filterStart).toHaveValue(START_VALUE);

      userEvent.type(filterEnd, END_VALUE);
      expect(filterEnd).toHaveValue(END_VALUE);
    });

    /*it('check blur events on inputs', () => {
      const START_VALUE = '23.06.2021';
      const END_VALUE = '24.06.2021';

      const mockActionFilterStart = jest.fn();
      const mockActionFilterEnd = jest.fn();

      jest.mock('../../store/actions/filter', () => ({
        actionFilterStart: mockActionFilterStart,
        actionFilterEnd: mockActionFilterEnd,
      }));

      renderWithRedux(
        <FilterForm
          actionFilterStart={mockActionFilterStart}
          actionFilterEnd={mockActionFilterEnd}
        />,
        {
          initialState: { filter: { isOpenFilter: true } },
        }
      );

      const [filterStart, filterEnd] = screen.getAllByRole('textbox');

      userEvent.type(filterStart, START_VALUE);
      userEvent.tab(filterStart);
      expect(mockActionFilterStart).toHaveBeenCalledTimes(1);
      expect(mockActionFilterStart).toHaveBeenCalledWith(moment(START_VALUE, 'DD.MM.YYYY'));

      userEvent.type(filterEnd, END_VALUE);
      userEvent.tab();
      expect(mockActionFilterEnd).toHaveBeenCalledTimes(1);
      expect(mockActionFilterEnd).toHaveBeenCalledWith(moment(END_VALUE, 'DD.MM.YYYY'));
    });*/
  });
});
