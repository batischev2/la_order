export const Item = ({ name, photo, price }) => {
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
