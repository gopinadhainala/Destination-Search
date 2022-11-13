import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const searchValue = event.target.value
    this.setState({searchInput: searchValue})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="destinations-container">
          <h1 className="header">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="search"
              onChange={this.onChangeSearchInput}
              className="input-box"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="unordered-list">
            {searchResults.map(eachDestination => (
              <DestinationItem
                destinationsList={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
