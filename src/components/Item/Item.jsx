import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addItem } from '../../features/item/basketSlice'

export const Item = ({ id, name, photo, price }) => {
  const dispatch = useAppDispatch()

  const [value, setValue] = useState(0)

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
        <button
          onClick={() =>
            dispatch(
              addItem({ id, title: name, url: photo, price, count: value })
            )
          }
        >
          добавить в чек
        </button>
      </div>
    </div>
  )
}
