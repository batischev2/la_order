import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem, findById, removeItem } from '../../features/item/basketSlice'

export const Item = ({ id, categoryId, name, photo, price }) => {
  const dispatch = useAppDispatch()

  const isInBasket = useAppSelector(state => findById(state, id));

  const [value, setValue] = useState(0)

  useEffect(() => {
    if(isInBasket) setValue(isInBasket.count)
  }, [])

  const handleChange = (event) => {
    setValue(event?.currentTarget?.value)
  }

  return (
    <div className='item'>
      <div className='flex-column'>
        <img width={180} src={photo} />
        <div className='text'>{name}</div>
      </div>
      <div className='flex-column'>
        <div className='flex-row'>
          <div>{price} р.</div>
          <input
            type='number'
            min={0}
            value={value}
            onChange={(value) => handleChange(value)}
          ></input>
        </div>
        {isInBasket ? <button
          onClick={() => {
            dispatch(removeItem({ id }))
            setValue(0)
          }}
        >
          убрать из корзины
        </button> : <button
          disabled={!value}
          onClick={() => dispatch(addItem({ id, categoryId, title: name, url: photo, price, count: value }))}
        >
          добавить в корзину
        </button>}
        
      </div>
    </div>
  )
}
