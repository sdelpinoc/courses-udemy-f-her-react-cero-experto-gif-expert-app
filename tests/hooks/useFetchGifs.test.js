import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

describe('Testing in useFetchGifs', () => {
    test('Should return the initial state', () => {
        // We use renderHook because hooks need part of the REACT lifecycle
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        // console.log(result); // { current: { images: [], isLoading: true } }
        const { images, isLoading } = result.current;
        // const { images, isLoading } = useFetchGifs();
        
        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
        expect(isLoading).toBeTruthy();
    });
    
    test('Should return an array of images and isLoading in false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        // Wait until the condition is met
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});