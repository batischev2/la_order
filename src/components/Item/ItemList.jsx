import { Item } from './Item'

export const ItemList = ({ items }) => {
  return (
    <div className='item-list'>
      {items.map((item, index) => (
        <Item
          id={item.id}
          categoryId={item.product_category_id}
          name={item.title}
          photo={'https://m.media-amazon.com/images/I/313WTbqZeqL._AC_.jpg'}
          price={item.price}
          key={index}
        />
      ))}
    </div>
  )
}
