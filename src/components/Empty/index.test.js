import React from 'react';
import { render, screen } from '@testing-library/react';

import LogIn from './index';

describe('LogIn', () => {
  it('renders LogIn component', () => {
    const { getByTestId } = render(<LogIn isOpen={true} />);

    expect(getByTestId(/bear-image/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing is there/i)).toBeInTheDocument();
    expect(screen.getByText(/Create your jog first/i)).toBeInTheDocument();
  });
});
