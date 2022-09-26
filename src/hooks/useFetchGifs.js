import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

// a hook is a function that return something
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        // getGifs return a promise
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    // Receives 2 parameters, a callback function, and an array of the elements that will trigger the execute of the function
    // If the second parameter is empty, the function only its execute when the component is created
    useEffect(() => {
        getImages();
        // A cleanup is return generally
    }, []);

    return {
        images,
        isLoading
    };
}
