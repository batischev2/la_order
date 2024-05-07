export const Category = ({ name, active }) => {
  return <div className={'category' + active ? ' active' : ''}>{name}</div>
}
