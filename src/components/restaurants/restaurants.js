import React, {useState} from 'react'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div>
      <ul>
        {props.restaurants.map(restaurant => {
          return (
            <li key={restaurant.id}>
              <button onClick={() => setCurrentId(restaurant.id)}>
                {restaurant.name}
              </button>
            </li>
          )
        })}
      </ul>
      <h2>{restaurant.name}</h2>
    </div>
  )
}

export default Restaurants