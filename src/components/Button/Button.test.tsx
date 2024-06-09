import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'; // Импортируем Jest
import Button from './Button';


describe('Button component', () => {
    test('renders with default type and medium size', () => {
        render(<Button>Default Button</Button>);
        const button = screen.getByRole('button', { name: /default button/i });
        expect(button).toHaveClass('uiXeny-button uiXeny-button--default uiXeny-button--sizeMedium');
    });

    test('renders with primary type', () => {
        render(<Button buttonType="primary">Primary Button</Button>);
        const button = screen.getByRole('button', { name: /primary button/i });
        expect(button).toHaveClass('uiXeny-button uiXeny-button--primary uiXeny-button--sizeMedium');
    });

    test('renders with link type', () => {
        render(<Button buttonType="link">Link Button</Button>);
        const button = screen.getByRole('button', { name: /link button/i });
        expect(button).toHaveClass('uiXeny-button uiXeny-button--link uiXeny-button--sizeMedium');
    });

    test('renders with submit type', () => {
        render(<Button type="submit">Submit Button</Button>);
        const button = screen.getByRole('button', { name: /submit button/i });
        expect(button).toHaveClass('uiXeny-button uiXeny-button--submit uiXeny-button--sizeMedium');
    });

    test('renders with small size', () => {
        render(<Button sizeType="small">Small Button</Button>);
        const button = screen.getByRole('button', { name: /small button/i });
        expect(button).toHaveClass('uiXeny-button uiXeny-button--default uiXeny-button--sizeSmall');
    });

    test('renders with large size', () => {
        render(<Button sizeType="large">Large Button</Button>);
        const button = screen.getByRole('button', { name: /large button/i });
        expect(button).toHaveClass('uiXeny-button uiXeny-button--default uiXeny-button--sizeLarge');
    });

    test('applies additional custom className', () => {
        render(<Button className="custom-class">Button with custom class</Button>);
        const button = screen.getByRole('button', { name: /button with custom class/i });
        expect(button).toHaveClass('uiXeny-button uiXeny-button--default uiXeny-button--sizeMedium custom-class');
    });
});
