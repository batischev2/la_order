import { useAppDispatch, useAppSelector } from '../app/hooks'
import { reset, totalPrice } from '../features/item/basketSlice'

export const Modal = ({ children, title, ...props }) => {
  const dispatch = useAppDispatch()
  const price = useAppSelector(totalPrice)

  const modal = document.getElementById('check-root')

  if (!modal) return null

  const closeModal = () => {
    modal.style.display = 'none'
    dispatch(reset())
  }

  const saveState = () => {
    // отправка заказа
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then(() => {
        modal.style.display = 'none'
        console.log(props.orderId, props.checkId)
        dispatch(reset())
      })
  }

  return (
    <div className='modal' id='modal'>
      <div className='content'>
        <div className='actions'>
          <h2>{title}</h2>
          <div>
            Итоговая стоимость товаров: <b>{price}</b> р.
          </div>
          <button className='toggle-button' onClick={() => closeModal()}>
            X
          </button>
        </div>
        <div className='main'>{children}</div>
        <div className='footer'>
          <button
            className='toggle-button warning'
            onClick={() => dispatch(reset())}
          >
            Сброс
          </button>
          <button className='toggle-button success' onClick={() => saveState()}>
            Готово
          </button>
        </div>
      </div>
    </div>
  )
}
