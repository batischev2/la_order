import { useState, useEffect } from 'react'

import { CategoryList } from './Category/CategoryList'
import { ItemList } from './Item/ItemList'
import { Modal } from './Modal'
import { ErrorBoundary } from './ErrorBoundary'

export const App = (props) => {
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    // список категорий
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((items) => {
        if (items) setActiveCategory(items[0].id)
        setCategories(items)
      })
  }, [])

  useEffect(() => {
    if (!activeCategory) return
    // запрос товаров по категории
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${activeCategory}/photos`
    )
      .then((response) => response.json())
      .then((items) => setItems(items))
  }, [activeCategory])

  return (
    <ErrorBoundary>
      <Modal title={'Заказ товара'} {...props}>
        {categories && (
          <CategoryList
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}
        {items && <ItemList items={items} />}
      </Modal>
    </ErrorBoundary>
  )
}
