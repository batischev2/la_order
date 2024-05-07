import { CategoryList } from './Category/CategoryList'
import { ItemList } from './Item/ItemList'
import { Modal } from './Modal'

export const App = () => {
  return (
    <Modal>
      <CategoryList />
      <ItemList />
    </Modal>
  )
}
