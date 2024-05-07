import { useState, useEffect } from 'react'
import { CategoryList } from './Category/CategoryList'
import { ItemList } from './Item/ItemList'
import { Modal } from './Modal'
import { ErrorBoundary } from './ErrorBoundary'

export const App = () => {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((items) => setCategories(items.slice(0, 10)))

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((items) => setItems(items.slice(0, 10)))
  }, [])

  const modal = document.getElementById('root')

  const closeModal = () => {
    modal.style.display = 'none'
    // clear state
  }

  const saveState = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then(() => {
        modal.style.display = 'none'
        // clear state
      })
  }

  return (
    <ErrorBoundary>
      <Modal closeModal={closeModal} saveState={saveState}>
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ItemList items={items} />
      </Modal>
    </ErrorBoundary>
  )
}
