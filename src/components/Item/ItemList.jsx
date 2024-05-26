import { Item } from './Item'

export const ItemList = ({ items }) => {
  return (
    <div className='item-list'>
      {items.map((item, index) => (
        <Item
          id={item.id}
          categoryId={item.albumId}
          name={item.title}
          photo={item.url}
          price={500}
          key={index}
        />
      ))}
    </div>
  )
}
