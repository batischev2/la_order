import { useState, useEffect } from 'react'
import { Item } from './Item'

export const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((items) => setItems(items.slice(0, 10)))
  }, [])

  return (
    <div className='item-list'>
      {items.map((item, index) => (
        <Item
          id={item.id}
          name={item.title}
          photo={item.url}
          price={500}
          key={index}
        />
      ))}
    </div>
  )
}
