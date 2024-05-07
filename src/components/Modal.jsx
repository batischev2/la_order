export const Modal = ({ children, closeModal, saveState }) => {
  return (
    <div className='modal' id='modal'>
      <div className='content'>
        <div className='actions'>
          <button className='toggle-button success' onClick={() => saveState()}>
            Готово
          </button>
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
