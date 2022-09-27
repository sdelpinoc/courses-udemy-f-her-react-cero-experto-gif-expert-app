import { fireEvent, render, screen } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('Testing in <GifExpertApp />', () => {
    test('Should add a category when press enter in the search input text', () => {
        render(<GifExpertApp />);
        
        const inputValue = 'Dragon Ball';
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue } });
        // fireEvent.keyDown(input, {key: 'Enter', code: 'Enter', charCode: 13});
        fireEvent.submit( form );

        // screen.debug();

        expect(screen.getByText(inputValue).textContent).toBe(inputValue);
        expect(screen.getByText).toBeTruthy();
    });

    test('Should check if a category is already in the categories state', () => {
        // render(<GifExpertApp />);
        // screen.debug();
        render(<GifExpertApp />);
        
        const inputValue = 'One Punch';
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue } });
        // fireEvent.keyDown(input, {key: 'Enter', code: 'Enter', charCode: 13});
        fireEvent.submit( form );

        screen.debug();

        expect(screen.getAllByText(inputValue).length).toBe(1);
    });
});