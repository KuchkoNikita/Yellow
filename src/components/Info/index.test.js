import React from 'react';
import { render, screen } from '@testing-library/react';

import Info from './index';

describe('Info', () => {
  it('renders Info component', () => {
    render(<Info />);

    expect(screen.getByText(/INFO/i)).toBeInTheDocument();
    expect(screen.getAllByRole('paragraph')).toHaveLength(2);
  });
});
