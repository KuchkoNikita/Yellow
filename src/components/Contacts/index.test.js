import React from 'react';
import { render, screen } from '@testing-library/react';

import Contacts from './index';

describe('Card', () => {
  it('renders Card component', () => {
    render(<Contacts />);

    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
  });
});
