export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${encodeURI(category)}&limit=20`
  const {data} = await fetch(url).then(res => res.json())
  
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_large.url,
  }))
  
  return gifs
}