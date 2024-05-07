import { useState, useEffect } from 'react'
import { Category } from './Category'

export const CategoryList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((items) => setCategories(items.slice(0, 10)))
  }, [])

  return (
    <div className='category-list'>
      {categories.map((item, index) => (
        <Category id={item.id} name={item.title} key={index} />
      ))}
    </div>
  )
}
