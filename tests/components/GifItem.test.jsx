import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components/GifItem';

describe('Testing in <GifItem />', () => {

    const title = 'One Punch';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Should made match with the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('Should check the image source(src) and the ALT', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(getByRole('img', { name: title }).src).toContain(url);
        const { src, alt } = screen.getByRole('img');
        // console.log(src);
        // console.log(alt);

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Should show the title in the component', () => {
        render(<GifItem title={title} url={url} />);

        // Only search in texts, not attributes or properties like 'alt'
        expect(screen.getByText(title)).toBeTruthy();
    });
});