import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card distance={23} time={85} speed={15} date="23.06.2021" />);

    expect(screen.getByText(/Distance:/i)).toBeInTheDocument();
    expect(screen.getByText(/Time:/i)).toBeInTheDocument();
    expect(screen.getByText(/Speed:/i)).toBeInTheDocument();

    expect(screen.getByText(/23 km/i)).toBeInTheDocument();
    expect(screen.getByText(/85 min/i)).toBeInTheDocument();
    expect(screen.getByText(/23.06.2021/i)).toBeInTheDocument();
    expect(screen.getByText(/15/i)).toBeInTheDocument();
  });
});
