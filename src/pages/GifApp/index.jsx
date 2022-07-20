import { useState } from 'react'
import { AddCategory, GifGrid } from '@/components'
import './gif-app.css'
import NoSearch from '@/components/NoSearchs'

const GifApp = () => {
  const initialState = []
  const [categories, setCategories] = useState(initialState)

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gifs React 18</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {
        categories.length === 0
          ? <NoSearch />
          : (
            categories.map(category => (
              <GifGrid category={category} key={category} />
            ))
          )
      }
    </>
  )
}

export default GifApp