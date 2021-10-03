 export const getGifs = async(category) => {
    const apiKey = '2Wvh4EiXd5dCf5qEcR7MWJeLT82vj43S';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;
    const resp = await fetch(apiUrl);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs; 
}