import React from 'react';
import { render, screen } from '@testing-library/react';
import Appointment from './Appointment';

beforeAll(() => {
    window.matchMedia = window.matchMedia || function() {
        return {
            matches : false,
            addListener : jest.fn(),
            removeListener: jest.fn(),
        };
    };
});

describe('Appointment component', () => {
    it('renders without errors', () => {
        render(<Appointment />);
    });

    it('contains Steps component', () => {
        render(<Appointment />);
        expect(screen.getByTestId('steps')).toBeInTheDocument();
        expect(screen.getByTestId('steps')).toHaveTextContent('1Enter user data2Enter appointment date');
    });
});