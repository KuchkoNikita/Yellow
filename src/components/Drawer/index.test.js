import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Drawer from './index';

const renderWithRouter = (
  component,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  const Wrapper = ({ children }) => <Router history={history}>{children}</Router>;
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};

describe('Drawer', () => {
  it('renders Drawer component if is open', () => {
    const { getByTestId } = renderWithRouter(<Drawer isOpen={true} />);

    expect(getByTestId(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/JOGS/i)).toBeInTheDocument();
    expect(screen.getByText(/INFO/i)).toBeInTheDocument();
    expect(screen.getByText(/CONTACT US/i)).toBeInTheDocument();
  });

  it('renders Drawer component if is NOT open', () => {
    const { queryByTestId } = renderWithRouter(<Drawer isOpen={false} />);

    expect(queryByTestId(/logo/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/JOGS/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/INFO/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/CONTACT US/i)).not.toBeInTheDocument();
  });

  describe('Events', () => {
    it('Click on the close button', () => {
      const mockSetIsOpen = jest.fn();
      renderWithRouter(<Drawer setIsOpen={mockSetIsOpen} isOpen={true} />);

      userEvent.click(screen.getByRole('button'));

      expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
      expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });

    it('Click on the JOGS link', () => {
      const mockSetIsOpen = jest.fn();

      const { getByTestId } = renderWithRouter(<Drawer setIsOpen={mockSetIsOpen} isOpen={true} />);
      userEvent.click(getByTestId(/jogs-link/i));

      expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
      expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });

    it('Click on the JOGS link', () => {
      const mockSetIsOpen = jest.fn();

      const { getByTestId } = renderWithRouter(<Drawer setIsOpen={mockSetIsOpen} isOpen={true} />);
      userEvent.click(getByTestId(/info-link/i));

      expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
      expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });

    it('Click on the JOGS link', () => {
      const mockSetIsOpen = jest.fn();

      const { getByTestId } = renderWithRouter(<Drawer setIsOpen={mockSetIsOpen} isOpen={true} />);
      userEvent.click(getByTestId(/contacts-link/i));

      expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
      expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });
  });
});
