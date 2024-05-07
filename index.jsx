import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const Modal = ({ children }) => {
  const closeModal = () => {
    modal.style.display = 'none'
    // clear state
  }

  return (
    <div className='modal' id='modal'>
      <div className='content'>
        <div className='actions'>
          <button className='toggle-button' onClick={() => closeModal()}>
            X
          </button>
        </div>
        <h2>Заказ товара</h2>
        <div className='main'>{children}</div>
      </div>
    </div>
  )
}

const CategoryList = () => {
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

const Category = ({ name }) => {
  return <div className='category'>{name}</div>
}

const ItemList = () => {
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

const Item = ({ name, photo, price }) => {
  return (
    <div className='item'>
      <div className='flex-column'>
        <img width={180} src={photo} />
        <div className='text'>{name}</div>
      </div>
      <div className='flex-column'>
        <div>{price} р.</div>
        <button>добавить в чек</button>
      </div>
    </div>
  )
}

const Shop = () => {
  return (
    <Modal>
      <CategoryList />
      <ItemList />
    </Modal>
  )
}

const button = document.getElementById('button')
const modal = document.getElementById('root')
const root = createRoot(modal)

button.onclick = function () {
  modal.style.display = 'block'
  root.render(<Shop />)
}
