import { useState, useEffect } from 'react'

import { CategoryList } from './Category/CategoryList'
import { ItemList } from './Item/ItemList'
import { Modal } from './Modal'
import { ErrorBoundary } from './ErrorBoundary'

import { setCategory } from '../features/category/categorySlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

export const App = (props) => {
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [basketItems, setBasketItems] = useState([])

  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)


  useEffect(() => {
    // список категорий
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((items) => {
        if (items) dispatch(setCategory(items[0]))
        setCategories(items)
      })
  }, [])

  // useEffect(() => {
  //   if (!activeCategory) return
  //   // запрос товаров по категории
  //   fetch(
  //     `https://jsonplaceholder.typicode.com/albums/${activeCategory}/photos`
  //   )
  //     .then((response) => response.json())
  //     .then((items) => setItems(items))
  // }, [activeCategory])

  const modal = document.getElementById('check-root')

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
        console.log(props.orderId, props.checkId)
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
          />
        )}
        {items && <ItemList items={items} />}
      </Modal>
    </ErrorBoundary>
  )
}
