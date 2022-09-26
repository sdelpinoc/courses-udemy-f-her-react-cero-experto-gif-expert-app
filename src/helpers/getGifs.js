export const getGifs = async category => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dm7qeXXlV1Z1S3XIH8Y8k4Z2MP6fSia3&q='${category}'&limit=10`;

    const response = await fetch(url);
    // console.log(url);

    const { data } = await response.json();
    // console.log(data);

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        // url: img.images.downsized.url
        url: img.images.downsized_medium.url
        // url: img.images.fixed_width_downsampled.url
    }));
    // console.log(gifs);

    return gifs;
};