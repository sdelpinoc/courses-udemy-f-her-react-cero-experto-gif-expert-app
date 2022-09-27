import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    // console.log(setCategories);
    // console.log(categories);

    const [inputValue, setinputValue] = useState('');

    // we receive an event which we destruct in '{ target }'
    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setinputValue(target.value);
    };

    const onSubmit = (event) => {
        // console.log(event);
        event.preventDefault();

        const newInputValue = inputValue.trim();
        // console.log(newInputValue);

        if (newInputValue.length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(newInputValue);

        setinputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                value={inputValue}
                placeholder="Search gif..."
                // onChange={event => { onInputChange(event) }}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};
