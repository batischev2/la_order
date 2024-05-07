import { Category } from './Category'

export const CategoryList = ({ categories, activeCategory }) => {
  return (
    <div className='category-list'>
      {categories.map((item, index) => (
        <Category
          id={item.id}
          name={item.title}
          key={index}
          active={item.id === activeCategory.id}
        />
      ))}
    </div>
  )
}
