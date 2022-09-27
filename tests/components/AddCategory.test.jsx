import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

describe('Testing in <AddCategory />', () => {
    test('Should change the value of the input text', () => {
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');

        // We fired the input event on the input text
        // The second parameter is options(object), and we use the target(object) to set the value to 'Saitama'
        fireEvent.input(input, { target: { value: 'Saitama' } });
        // screen.debug();

        expect(input.value).toBe('Saitama');
    });

    test('Should call onNewCategory if the input have a value', () => {
        const inputValue = 'Saitama';
        // TODO:
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        // We must add aria-label="form" to the form to be able to select it
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        // screen.debug();

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toBeCalledWith(inputValue);
    });

    test('Should not call onNewCategory if the input text is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});