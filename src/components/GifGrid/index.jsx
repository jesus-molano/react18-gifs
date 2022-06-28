import { GifItem } from '@/components'
import useFetchGifs from '@/hooks/useFetchGifs'
import './gif-grid.css'

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)

  return (
    <div className='category'>
      {
        isLoading && (<p>Loading...</p>)
      }
      <h2>{category}</h2>
      <div className='card-grid'>
        {
          images.length === 0
            ? <p className='no-results'>No results found ❌</p>
            : (
              images.map(image => (
                <GifItem key={image.id} {...image} />
              ))
            )
        }
      </div>
    </div>
  )
}

export default GifGrid