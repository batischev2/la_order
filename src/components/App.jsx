import { useState, useEffect } from 'react'
import { CategoryList } from './Category/CategoryList'
import { ItemList } from './Item/ItemList'
import { Modal } from './Modal'
import { ErrorBoundary } from './ErrorBoundary'

export const App = () => {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [items, setItems] = useState([])
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    // список категорий
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((items) => {
        setActiveCategory(items[0].id)
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

  const modal = document.getElementById('root')

  const closeModal = () => {
    modal.style.display = 'none'
    // clear state
  }

  const saveState = () => {
    // отправка заказа
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then(() => {
        modal.style.display = 'none'
        // clear state
      })
  }

  const resetOrder = () => {
    setBasketItems([])
  }

  return (
    <ErrorBoundary>
      <Modal
        closeModal={closeModal}
        saveState={saveState}
        resetOrder={resetOrder}
        title={'Заказ товара'}
        totalPrice={basketItems.reduce(
          (item, accumulator) => accumulator + item.price,
          0
        )}
      >
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
