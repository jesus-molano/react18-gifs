import { useState } from "react"
import './add-category.css'

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length < 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form className="add-category" onSubmit={handleOnSubmit}>
      <input
        type="search"
        placeholder="Search gifs..."
        value={inputValue}
        onChange={handleOnChange} />
    </form>
  )
}

export default AddCategory
