// import { useEffect, useState } from 'react';

// import { getGifs } from '../helpers/getGifs';
import { PropTypes } from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Functions must not be executed in a functional component, because every time the component is rendered it is re-executed
// useEffect, hook of react to ejecute secondary effects
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    // console.log({isLoading});

    // getGifs(category);

    // In jsx we use className for the css and not class, because is a reserved word
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem
                            key={image.id}
                            {...image} // Spread the properties to the component
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};