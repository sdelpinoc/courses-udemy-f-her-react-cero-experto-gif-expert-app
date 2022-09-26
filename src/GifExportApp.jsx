import { useState } from 'react';

import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {

    // These hooks are referenced by the position they are declared
    const [categories, setCategories] = useState(['One Punch']);
    // console.log(categories);
    // const replaceArr = ['Pokémon', 'Naruto'];

    const onAddCategory = (newCategory) => {

        // if (categories.includes(newCategory)) return;

        console.log(newCategory);
        // setCategories([newCategory, ...categories]);
        setCategories([newCategory, ...categories.filter(value => value !== newCategory)]);
        // setCategories(cat => [...cat, 'Boku No Hero Academy']);
        // setCategories(categories.concat('Shingeki No Kyojin'));
        // setCategories(Array.from(categories.concat([...replaceArr, 'Bleach'], 'One Piece')));
    };

    return (
        <>
            {/* Title */}
            <h1>Gif Expert App</h1>

            {/* Entry input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />

            {/* <button onClick={onAddCategory}>Add</button> */}
            {/* Gif list */}
            {
                categories.map(category => {
                    return <GifGrid key={category} category={category} />
                })
            }
        </>
    );
};