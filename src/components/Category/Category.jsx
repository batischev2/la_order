import { useAppSelector } from '../../app/hooks'
import { itemsByCategory } from '../../features/item/basketSlice'

export const Category = ({ id, name, active, setActiveCategory }) => {
  const count = useAppSelector((state) => itemsByCategory(state, id))

  return (
    <div
      onClick={() => setActiveCategory(id)}
      className={`category ${active ? 'active' : ''}`}
    >
      {name}
      {count ? <span className={'count'}>{count}</span> : null}
    </div>
  )
}
