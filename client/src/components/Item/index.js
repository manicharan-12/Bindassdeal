import './index.css'

const Item = props => {
  const {details, deleteItem, id} = props
  const {name, description} = details

  const removeItem = () => {
    deleteItem(id)
  }

  return (
    <div className="item">
      <div className="align">
        <h2>{name}</h2>
        <button className="del-button" onClick={removeItem}>
          Remove
        </button>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Item