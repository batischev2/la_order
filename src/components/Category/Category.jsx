export const Category = ({ id, name, active, setActiveCategory }) => {
  return (
    <div
      onClick={() => setActiveCategory(id)}
      className={`category ${active ? 'active' : ''}`}
    >
      {name}
    </div>
  )
}
