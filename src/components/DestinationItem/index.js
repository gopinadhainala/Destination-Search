import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list-styling">
      <img src={imgUrl} alt={name} className="image-sizing" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
