import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducer from '../../store/reducers/rootReducer';
import Form from './index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Form', () => {
  it('renders Info component', () => {
    renderWithRedux(<Form />);

    expect(screen.getByText(/Distance/i)).toBeInTheDocument();
    expect(screen.getByText(/Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  });

  describe('Events', () => {
    it('check focus on forms', () => {
      renderWithRedux(<Form />);

      const [inputDistance, inputTime, inputDate] = screen.getAllByTestId('form-input');
      const [closeButton, saveButton] = screen.getAllByTestId('form-button');
      userEvent.tab();
      expect(closeButton).toHaveFocus();

      userEvent.tab();
      expect(inputDistance).toHaveFocus();

      userEvent.tab();
      expect(inputTime).toHaveFocus();

      userEvent.tab();
      expect(inputDate).toHaveFocus();

      userEvent.tab();
      expect(saveButton).toHaveFocus();
    });

    it('check default values on inputs', () => {
      renderWithRedux(<Form />);

      const [inputDistance, inputTime, inputDate] = screen.getAllByRole('textbox');

      expect(inputDistance).toHaveValue('');
      expect(inputTime).toHaveValue('');
      expect(inputDate).toHaveValue('');
    });

    it('check entering data into in inputs', () => {
      const DISTANCE_VALUE = '20';
      const TIME_VALUE = '30';
      const DATE_VALUE = '23.06.2021';

      renderWithRedux(<Form />);

      const [inputDistance, inputTime, inputDate] = screen.getAllByRole('textbox');

      userEvent.type(inputDistance, DISTANCE_VALUE);
      expect(inputDistance).toHaveValue(DISTANCE_VALUE);

      userEvent.type(inputTime, TIME_VALUE);
      expect(inputTime).toHaveValue(TIME_VALUE);

      userEvent.type(inputDate, DATE_VALUE);
      expect(inputDate).toHaveValue(DATE_VALUE);
    });

    it('check close button', () => {
      const mockSetIsOpenForm = jest.fn();

      renderWithRedux(<Form setIsOpenForm={mockSetIsOpenForm} />);

      const [closeButton] = screen.getAllByTestId('form-button');
      userEvent.click(closeButton);

      expect(mockSetIsOpenForm).toHaveBeenCalledTimes(1);
      expect(mockSetIsOpenForm).toHaveBeenCalledWith(false);
    });

    // it('check save button', () => {
    //   const mockSetIsOpenForm = jest.fn();
    //   const mockFetchCreateJog = jest.fn();

    //   renderWithRedux(
    //     <Form setIsOpenForm={mockSetIsOpenForm} fetchCreateJog={mockFetchCreateJog} />
    //   );

    //   const [, saveButton] = screen.getAllByTestId('form-button');
    //   userEvent.click(saveButton);

    //   expect(mockFetchCreateJog).toHaveBeenCalledTimes(1);
    //   expect(mockFetchCreateJog).toHaveBeenCalledTimes({
    //     distance: '',
    //     time: '',
    //     date: '',
    //   });

    //   expect(mockSetIsOpenForm).toHaveBeenCalledTimes(1);
    //   expect(mockSetIsOpenForm).toHaveBeenCalledWith(false);
    // });
  });
});
