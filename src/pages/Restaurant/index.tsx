import { useParams } from 'react-router-dom'
import { FoodList } from '../../components/FoodList'
import RestaurantBanner from '../../components/RestaurantBanner'
import { Restaurant as RestaurantType } from '../../types/restaurant'
import { useEffect, useState } from 'react'
import { baseURL } from '../../utils/baseUrl'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`${baseURL}/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <RestaurantBanner
        category={restaurant.tipo}
        title={restaurant.titulo}
        image={restaurant.capa}
      />
      <FoodList foods={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
