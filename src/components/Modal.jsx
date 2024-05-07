export const Modal = ({
  children,
  closeModal,
  saveState,
  resetOrder,
  title,
  totalPrice
}) => {
  return (
    <div className='modal' id='modal'>
      <div className='content'>
        <div className='actions'>
          <h2>{title}</h2>
          <div>
            Итоговая стоимость товаров: <b>{totalPrice}</b> р.
          </div>
          <button className='toggle-button' onClick={() => closeModal()}>
            X
          </button>
        </div>
        <div className='main'>{children}</div>
        <div className='footer'>
          <button
            className='toggle-button warning'
            onClick={() => resetOrder()}
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
