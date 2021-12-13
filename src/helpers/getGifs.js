

  export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=Ltu9dw1SWv1j1vRIZBiD4QhFa8HTDLyi`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs  = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    // const gif = { gifs };
    // console.log(gifs);
    return gifs;
}