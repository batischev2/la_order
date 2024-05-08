export const Item = ({ name, photo, price }) => {
  return (
    <div className='item'>
      <div className='flex-column'>
        <img width={180} src={photo} />
        <div className='text'>{name}</div>
      </div>
      <div className='flex-column'>
        <div className='flex-row'>
          <div>{price} р.</div>
          <input type='number' min={0} defaultValue={0}></input>
        </div>
        <button>добавить в чек</button>
      </div>
    </div>
  )
}
