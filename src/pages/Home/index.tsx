import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'
import { Restaurant } from '../../types/restaurant'
import { baseURL } from '../../utils/baseUrl'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`${baseURL}/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
